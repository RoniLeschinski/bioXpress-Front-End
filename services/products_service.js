import {apiBaseUrl} from '../utils/constants';
import axios from 'axios';
import {
  base64_encode_data,
  base64_encode,
  base64url_encode,
  base64_decode,
} from '../utils/sourceBase64';

export class ProductsService {
  async fetchRecomendedProducts() {
    var token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcm5hbWUiOiJ0ZXN0IiwiaWRfdXNlciI6MTgsImZpcnN0X25hbWUiOiJSb25pIiwibGFzdF9uYW1lIjoiTGVzY2hpbnNraSIsInByb2ZpbGVfcGljIjoibm8iLCJkc190eXBlIjoiY29tcHJhZG9yIn0sImlhdCI6MTU5ODA0NjM0MSwiZXhwIjoxNTk4MTMyNzQxfQ.K22dxhrcPAW7h9Re9CBy4wbfsloEgr6abs1ih2ESTD8';
    var productList = [];
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };

    try {
      var response = await axios.get(
        apiBaseUrl + '/products/getProductsByCategory',
        {
          headers: headers,
        },
      );
      
      
      /* if (response.statusCode == 200){
        productList = JSON.parse(
        response.data.data
        ); 
        console.log(productList);
      } */
      console.log(response.data)
        productList = response.data.data 
        console.log(productList)

      switch (response.status) {
        case 200: 
          productList = JSON.parse(
          response.data.data,
          ); 
          console.log(productList);
          console.log(prueba)
          console.log(productList)
          break;
        
        case 403: 
          console.log('Unauthorized');
          throw 'error';
        
        case 429: 
          console.log('Too Many Requests');
          throw 'error';
        
        case 401: 
          console.log('Wrong token');
          throw 'error';
        
      }
    } catch {
      error => {
        console.log(error);
      };
      /* .then(
        response => {
          console.log(response.data.data)
          prueba = 10
          switch (response.statusCode) {
            case 200: {
              productList = JSON.parse(response.data.data) /*= JSON.parse(response.body)['data'] ;
              console.log(productList); 
              break;
            }
            case 403: {
              console.log('Unauthorized');
              throw "error";
            }
            case 429: {
              console.log('Too Many Requests');
              throw "error";
            }
            case 401: {
              console.log('Wrong token');
            }
          }
        },

        error => {
          console.log(error);
        },
      ); */

      return productList;
    }
  }
}
