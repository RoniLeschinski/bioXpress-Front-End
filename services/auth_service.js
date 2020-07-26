import apiBaseUrl from '../utils/constants'


class AuthService {
    async signInWithEmailAndPassword (email, password){
        var token;
        const toBase64 = window.atob({email} + ":" + {password}) 
        const credentials = "Basic " + toBase64;
        try {
            const response = await fetch(
                {apiBaseUrl} + "/users/login"
            )
            switch(response.statusCode){
                case 200 : {
                    token = JSON.parse(response.body)["token"];
                    break;
                }
                case 401: {
                    console.log("Unauthorized");
                    break;
                }
                case 429 : {
                    console.log("Too Many Requests");
                    break;
                }
            }
        }
        catch (e){
            console.log(e);
        }
        
        return token;
    }
}