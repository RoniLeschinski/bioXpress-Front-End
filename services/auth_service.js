import apiBaseUrl from '../utils/constants';

export class AuthService {
  async signInWithEmailAndPassword(email, password) {
    var token;
    const toBase64 = window.atob({email} + ':' + {password});
    const credentials = 'Basic ' + toBase64;
    try {
      const response = await fetch({apiBaseUrl} + '/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': credentials
        },
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

