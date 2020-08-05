import {apiBaseUrl} from '../utils/constants'
import Axios from 'axios';


export class ProductsService {
    async fetchRecomendedProducts (){
        var token;
        var productList;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }

            let response = await Axios.post({apiBaseUrl} + "/products/home",{
                headers: headers
        },
            )
            switch(response.statusCode){
                case 200 : {
                    productList = JSON.parse(response.body)["data"];
                    console.log(productList);
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
       
        return productList;
    }
}
