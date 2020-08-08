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
    ); /* new Buffer(email + ":" + password).toString('base64') */
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
              break;
            }
            case 429: {
              console.log('Too Many Requests');
              break;
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
    var token;
    const toBase64 = window.atob({email} + ':' + {password});
    try {
      const response = await fetch({apiBaseUrl} + '/users/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: credentials,
        },
        body: JSON.stringify({
          name: name,
          lastname: lastName,
          email: email,
          password: password,
        }),
      });
      switch (response.statusCode) {
        case 200: {
          token = JSON.parse(response.body)['token'];
          console.log(token);
          break;
        }
        case 403: {
          console.log('Unauthorized');
          break;
        }
        case 429: {
          console.log('Too Many Requests');
          break;
        }
      }
    } catch (e) {
      console.log(e);
    }

    return token;
  }
}
