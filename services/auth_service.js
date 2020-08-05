import {apiBaseUrl} from '../utils/constants';
import axios from 'axios'

export class AuthService {
  async signInWithEmailAndPassword(email, password) {
     var token;
     /* const toBase64 = btoa(email + ":" + password) *//* new Buffer(email + ":" + password).toString('base64') */;
     const credentials = 'Basic dGVzdDp0ZXN0' /* + toBase64 */ ;
     const headers = {
      'Content-Type': 'application/json',
      'Authorization': credentials
    }
     
            console.log(credentials)
            let response = await axios.post('http://35.211.3.86:3200' + '/users/login', 
            {'user': 'test', 'password':'test'},
            {
              headers: headers
            })
     /*  let response = await fetch({apiBaseUrl} + '/general/login', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': credentials
        },
      }) */
      .then((response)=> {
        console.log(response.data)
        
        },
        
        (error) => { console.log(error)}
        )
 
      
      /* switch (response.statusCode) {
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
      } */
     

    return token;
  }

  async registerWithEmail(name, lastName, email, password){
    var token;
    const toBase64 = window.atob({email} + ':' + {password});
    try {
        const response = await fetch({apiBaseUrl} + '/users/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': credentials
        },
        body:JSON.stringify({'name' : name, 'lastname' : lastName, 'email' : email, 'password' : password})
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

