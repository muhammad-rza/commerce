/* eslint-disable */
 // import {  unsetToken } from '@/utils/auth';
import axios from 'axios';
// import { getTokenFromCookie, getTokenFromLocalStorage } from '@/utils/auth'
import Cookie from 'js-cookie';



axios.interceptors.response.use((response) => {
  return response;
}, function (error) {
  // Do something with response error
  if (error.response.status === 401) {

    unsetToken();
    location.replace(process.env.appBaseUrl + 'auth/login')
  }

  if (error.response.status === 403) {
     location.replace(process.env.appBaseUrl)
  }

  return Promise.reject(error.response);
});

const prefix = '/api/v1';
axios.defaults.baseURL = 'http://localhost:3333'+prefix;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookie.get('_token');
axios.defaults.headers.post['Content-Type'] = 'application/json';
//
//
 export default axios;

// export default axios.create({
//    baseURL:'https://s.shop.az/api/',
//
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization' : 'Bearer ' + Cookie.get('_token')
//
//    },
//
//
// });


