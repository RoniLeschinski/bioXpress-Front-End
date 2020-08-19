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
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcm5hbWUiOiJ0ZXN0IiwiaWRfdXNlciI6MTgsImZpcnN0X25hbWUiOiJSb25pIiwibGFzdF9uYW1lIjoiTGVzY2hpbnNraSIsInByb2ZpbGVfcGljIjoibm8iLCJkc190eXBlIjoiY29tcHJhZG9yIn0sImlhdCI6MTU5Nzc5MjQ0OSwiZXhwIjoxNTk3ODc4ODQ5fQ.1K1MngzcIbvmXLHqiCCpLHUb8DvsSA2gGZoFuIEzuaM";
    var productList;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + token,
    };

    axios
      .get(
        apiBaseUrl + '/products/getProductsByCategory',
        {
          headers: headers,
        },
        
      )
      .then(
        response => {
          console.log(response.data.data)
          switch (response.statusCode) {
            case 200: {
              productList = response.data.data  /*= JSON.parse(response.body)['data'] ;
              console.log(productList); */
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
      );

    return productList;
  }
}
