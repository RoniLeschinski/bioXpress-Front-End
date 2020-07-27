import apiBaseUrl from '../utils/constants'


export class ProductsService {
    async fetchRecomendedProducts (){
        var token;
        var productList;
        try {
            const response = await fetch(
                {apiBaseUrl} + "/products/home",{
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json',
                'Authorization': token
                }
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
        }
        catch (e){
            console.log(e);
        }
        return productList;
    }
}
