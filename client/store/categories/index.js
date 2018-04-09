import allServices from '@/services/allInOne'

const state = {

  categories:[]

};

const getters = {

  categories : (state) => {

    return state.categories;

  },

};


const mutations = {

  FETCH_ALL(state,result) {
    state.categories = result;
    // state.categories[0]= undefined;

  },

  UPDATE(state,payload) {

    $("#CategoryModal").modal('hide');

    if(payload.type=='create') {

       state.categories.unshift(payload.result)
    }else {
     return state.categories.find((value,index)=> {

       if(value._id == payload.result._id) {return state.categories.splice(index,1 , payload.result) }

      })
    }
  },

  REMOVE(state,id) {

    return state.categories.find((value,index)=> {

      if(value._id == id) {return state.categories.splice(index,1) }

  });



  }

};

const actions = {

  all({commit},params) {
    allServices.all('categories').then((response) => commit('FETCH_ALL', response.data)).catch((error) => {console.log(error.status)});
  },

  create({commit}, {params , vue}) {
    allServices.create('categories' ,params.form).then((response) => {
      commit('UPDATE', { result:response.data , type:'create' });
      vue.$toasted.success(`CREATED`);

    }).catch((error) => {});
  },
  update({commit},{params , vue}) {
    allServices.update('categories' ,params.form).then((response) => {
      commit('UPDATE' , { result:response.data , type:'update' });
      vue.$toasted.success(`UPDATED`);
    }).catch((error) => {});
  },

  remove({commit},{id ,vue}) {
    allServices.delete('categories' , id).then((response) => {
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
