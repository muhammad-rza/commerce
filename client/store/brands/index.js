import allServices from '@/services/allInOne'

const state = {

  brands:[]

};

const getters = {

  brands : (state) => {

    return state.brands;

  },

};


const mutations = {

  FETCH_ALL(state,result) {
    state.brands = result;
    // state.brands[0]= undefined;

  },

  UPDATE(state,payload) {

    $("#BrandModal").modal('hide');

    if(payload.type=='create') {

       state.brands.unshift(payload.result)
    }else {
     return state.brands.find((value,index)=> {

       if(value._id == payload.result._id) {return state.brands.splice(index,1 , payload.result) }

      })
    }
  },

  REMOVE(state,id) {

    return state.brands.find((value,index)=> {

      if(value._id == id) {return state.brands.splice(index,1) }

  });



  }

};

const actions = {

  all({commit},params) {
    allServices.all('brands').then((response) => commit('FETCH_ALL', response.data)).catch((error) => {console.log(error.status)});
  },

  create({commit}, {params , vue}) {
    allServices.create('brands' ,params.form).then((response) => {
      commit('UPDATE', { result:response.data , type:'create' });
      vue.$toasted.success(`CREATED`);

    }).catch((error) => {});
  },
  update({commit},{params , vue}) {
    allServices.update('brands' ,params.form).then((response) => {
      commit('UPDATE' , { result:response.data , type:'update' });
      vue.$toasted.success(`UPDATED`);
    }).catch((error) => {});
  },

  remove({commit},{id ,vue}) {
    allServices.delete('brands' , id).then((response) => {
      commit('REMOVE' , id);
      vue.$toasted.success(`DELETED`);
    }).catch((error) => {console.log(error.status)});
  },


};





export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations

};
