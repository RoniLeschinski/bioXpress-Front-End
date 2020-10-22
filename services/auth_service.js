import React, {Component, useState, useEffect, useContext} from 'react';
import {apiBaseUrl} from '../utils/constants';
import axios from 'axios';
import {
  base64_encode_data,
  base64_encode,
  base64url_encode,
  base64_decode,
} from '../utils/sourceBase64';
import { AuthContext } from '../src/Context/auth_context';
import RNFetchBlob from 'react-native-fetch-blob'

  export async function signInWithEmailAndPassword (email, password){
    var token; 
    const toBase64 = base64_encode(
      email + ':' + password,
    ); 
    const credentials = 'Basic ' + toBase64;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: credentials,
    };
    await axios
      .post(
        apiBaseUrl + '/users/login',
        {user: 'test', password: 'test'},
        {
          headers: headers,
        },
      )
      .then(
        response => {
          console.log(response.data.token);
          
          switch (response.status) {
            case 200: {
              token = JSON.stringify(response.data.token);
              console.log(token)
              return token;
              break;
            }
            case 401: {
              console.log('Unauthorized');
              throw "error";
            }
            case 429: {
              console.log('Too Many Requests');
              throw "error";
            }
          }
        },
        error => {
          console.log(error);
        },
      );
      return token
  }

  export async function registerWithEmail(name, lastName, email, password) {
    const data = {
      first_name: name,
      last_name: lastName,
      username: email,
      password: password,
      id_type: 1
    }
    const headers = {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
    var token;
    
      axios
      .post(
        apiBaseUrl + '/users/createUser',
        data,
        {
          headers: headers,
        },
        
      )
      .then(
        response => {
          console.log(response.data);
          switch (response.statusCode) {
            case 200: {
              token = JSON.parse(response.body);
              console.log(response.body);
              break;
            }
            case 401: {
              console.log('Unauthorized');
              throw "error";
            }
            case 429: {
              console.log('Too Many Requests');
              throw "error";
            }
          }
        },

        error => {
          console.log(error);
        },
      );

    
    return token;
  }

