import {apiBaseUrl} from '../utils/constants';
import axios from 'axios';
import {
  base64_encode_data,
  base64_encode,
  base64url_encode,
  base64_decode,
} from '../utils/sourceBase64';
import FormData from 'form-data';
import RNFetchBlob from 'react-native-fetch-blob';

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
    token,
    id,
  ) {
    console.log(id);

    RNFetchBlob.fetch(
      'POST',
      apiBaseUrl + '/products/uploadProduct',
      {
        'Content-Type': `multipart/form-data`,
        Authorization: 'Bearer ' + token,
      },
      [
        {name: 'id_store', data: String(id)},
        {name: 'stock', data: String(stock)},
        {name: 'id_category', data: String(categoria)},
        {name: 'ds_product', data: String(descripcion)},
        {name: 'price', data: String(precio)},
        {name: 'title', data: String(titulo)},
        {
          name: 'filee',
          filename: imagen.fileName,
          type: imagen.type,
          data: RNFetchBlob.wrap(imagen.path),
        },
      ],
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
  async fetchCategory(token, id) {
    var productList = [];
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };

    try {
      var response = await axios.get(
        apiBaseUrl + '/products/getProductsByCategory/' + id,
        {
          headers: headers,
        },
      );

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

      return productList;
    }
  }
  async fetchShopProducts(token, id) {
    var productList = [];
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };

    try {
      var response = await axios.get(
        apiBaseUrl + '/products/getProductsByIdStore/' + id,
        {
          headers: headers,
        },
      );

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

      return productList;
    }
  }
  async fetchSearch(token, input) {
    const data = {
      title: input,
    };
    var productList = [];
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };

    try {
      var response = await axios.post(
        apiBaseUrl + '/products/getProductsByFilters',
        data,
        {headers: headers},
      );

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

      return productList;
    }
  }
  async fetchShopInfo(token, id) {
    var info = [];
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };

    try {
      var response = await axios.get(
        apiBaseUrl + '/stores/getStoresbyid/' + id,
        {
          headers: headers,
        },
      );

      info = response.data;
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

      return info;
    }
  }
  async fetchPendingSales(token, status, id) {
    const data = {
      status: status,
      id_store: id
    };
    var info = [];
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };
    try {
      var response = await axios.post(
        apiBaseUrl + '/purchase/getcartsbystatusforstore',
        data,
        {headers: headers},
      );
      info = response.data.data.data;
      switch (response.status) {
        case 200:
          info = JSON.parse(response.data.data);
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

      return info;
    }
  }
}
