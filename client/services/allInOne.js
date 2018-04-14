import axios from '@/plugins/axios.js';

const apiRoutes = {

  categories:'/categories',
  templates:'/template',
  fields:'/template-fields',
  values:'/template-values',
  brands:'/brands',

};

const allServices = {


  all(route,params=null) {
    // params = {
    //   status:true,
    //   sort:'asc'
    // }
    return axios.get(apiRoutes[route],{params})

  },

  create(route,params) {

    return axios.post(apiRoutes[route],params)

  },

  update(route,params) {

    return axios.put(apiRoutes[route]+'/'+params._id ,params)

  },

  delete(route,id) {

    return axios.delete(apiRoutes[route]+'/'+id)

  },

  show(route,params) {

    return axios.get(apiRoutes[route]+'/'+params._id ,params)

  },

  search(route,params) {

    return axios.post(apiRoutes[route],post)

  }


};


export default allServices;
