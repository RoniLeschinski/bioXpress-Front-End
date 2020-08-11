import {apiBaseUrl} from '../utils/constants';
import axios from 'axios';
import {
  base64_encode_data,
  base64_encode,
  base64url_encode,
  base64_decode,
} from '../utils/sourceBase64';

export class AuthService {
  async signInWithEmailAndPassword(email, password) {
    var token;
    const toBase64 = base64_encode(
      email + ':' + password,
    ); 
    const credentials = 'Basic ' + toBase64;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: credentials,
    };

    axios
      .post(
        apiBaseUrl + '/users/login',
        {user: 'test', password: 'test'},
        {
          headers: headers,
        },
      )
      
      .then(
        response => {
          console.log(response.data);
          switch (response.statusCode) {
            case 200: {
              token = JSON.parse(response.body)['token'];
              console.log(token);
              break;
            }
            case 401: {
              console.log('Unauthorized');
              throw "error";
            }
            case 429: {
              console.log('Too Many Requests');
              throw "error";
            }
          }
        },

        error => {
          console.log(error);
        },
      );

    return token;
  }

  async registerWithEmail(name, lastName, email, password) {
    const data = {
      first_name: name,
      last_name: lastName,
      username: email,
      password: password,
    }
    const headers = {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
    var token;
    
      axios
      .post(
        apiBaseUrl + '/users/createUser',
        data,
        {
          headers: headers,
        },
        
      )
      .then(
        response => {
          console.log(response.data);
          switch (response.statusCode) {
            case 200: {
              token = JSON.parse(response.body);
              console.log(response.body);
              break;
            }
            case 401: {
              console.log('Unauthorized');
              throw "error";
            }
            case 429: {
              console.log('Too Many Requests');
              throw "error";
            }
          }
        },

        error => {
          console.log(error);
        },
      );

    
    return token;
  }
}
