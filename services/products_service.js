import {apiBaseUrl} from '../utils/constants';
import axios from 'axios';
import {
  base64_encode_data,
  base64_encode,
  base64url_encode,
  base64_decode,
} from '../utils/sourceBase64';
import FormData from 'form-data';

export class ProductsService {
  async fetchRecomendedProducts(token) {
    var productList = [];
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };

    try {
      var response = await axios.get(apiBaseUrl + '/products/getrecommended', {
        headers: headers,
      });

      /* if (response.statusCode == 200){
        productList = JSON.parse(
        response.data.data
        ); 
        console.log(productList);
      } */
      productList = response.data.data;
      switch (response.status) {
        case 200:
          productList = JSON.parse(response.data.data);
          console.log(productList);
          console.log(prueba);
          console.log(productList);
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
  async fetchOfferProducts(token) {
    /* var token =
      ''; */
    var productList = [];
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };

    try {
      var response = await axios.get(apiBaseUrl + '/products/getpromos', {
        headers: headers,
      });

      /* if (response.statusCode == 200){
        productList = JSON.parse(
        response.data.data
        ); 
        console.log(productList);
      } */
      productList = response.data.data;

      switch (response.status) {
        case 200:
          productList = JSON.parse(response.data.data);
          console.log(productList);
          console.log(prueba);
          console.log(productList);
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
  async uploadProduct(
    titulo,
    imagen,
    categoria,
    descripcion,
    precio,
    stock,
    envio,
    retiro,
  ) {
    /* var imagefile = document.querySelector('#imagen'); */
    let data = new FormData();
    data.append('id_store', 1);
    data.append('stock', stock);
    data.append('id_category', categoria);
    data.append('ds_product', descripcion);
    data.append('price', precio);
    data.append('title', titulo);
    data.append('filee', imagen);

    console.log(imagen)

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcm5hbWUiOiJIb3JhY2lvMSIsImlkX3VzZXIiOjIsImZpcnN0X25hbWUiOiJIb3JhY2lvIiwibGFzdF9uYW1lIjoiR2F0ZSIsInByb2ZpbGVfcGljIjoiaHR0cDovL2xvY2FsaG9zdDozMDAyL3B1YmxpY1xcMTU5NDgzMTIyMTE4NmhvcmFjaW8uanBnIiwiZHNfdHlwZSI6InZlbmRlZG9yIn0sImlhdCI6MTYwMDA0Mzc2OSwiZXhwIjoxNjAwMTMwMTY5fQ.uI-yR6eG-_uVFVUTOw3giI_knZNu2RLbPYWZTMtXcus';

    const headers = {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      Authorization: 'Bearer ' + token,
    };
    axios
      .post(apiBaseUrl + '/products/uploadProduct', data, {
        headers: headers,
      })
      .then(
        response => {
          switch (response.status) {
            case 200: {
              console.log(response.data);
              break;
            }
            case 401: {
              console.log('Unauthorized');
              throw 'error';
            }
            case 429: {
              console.log('Too Many Requests');
              throw 'error';
            }
          }
        },
        
        error => {
          console.log(error);
        },
      );
  }

  handleChange(
    titulo,
    selectorFiles: FileList,
    categoria,
    descripcion,
    precio,
    stock,
    envio,
    retiro,
  ) {
    console.log(selectorFiles)
    this.uploadProduct(
      titulo,
      selectorFiles,
      categoria,
      descripcion,
      precio,
      stock,
      envio,
      retiro,
    );
  }

  async buyProductById(id, cant, token) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };
    const data = {
      date: '2020-08-28',
      id_product: id,
      quantity: cant,
    };
    axios.post(apiBaseUrl + '/purchase/createcart', data, {
      headers: headers,
    });
  }
  async buyCart(totalPrice, products, token) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };
    const data = {
      date: '2020-09-12',
      total_price: totalPrice,
      cart_products: products,
    };
    axios.post(apiBaseUrl + '/purchase/createcart', data, {
      headers: headers,
    });
  }
}
