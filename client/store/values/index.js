import allServices from '@/services/allInOne'

const state = {

  values:[]

};

const getters = {

  values : (state) => {

    return state.values;

  },

};


const mutations = {

  FETCH_ALL(state,result) {
    state.values = result;
    // state.values[0]= undefined;

  },

  UPDATE(state,payload) {

    $("#ValueModal").modal('hide');

    if(payload.type=='create') {

       state.values.unshift(payload.result)
    }else {
     return state.values.find((value,index)=> {

       if(value._id == payload.result._id) {return state.values.splice(index,1 , payload.result) }

      })
    }
  },

  REMOVE(state,id) {

    return state.values.find((value,index)=> {

      if(value._id == id) {return state.values.splice(index,1) }

  });



  }

};

const actions = {

  all({commit},params) {
    allServices.all('values').then((response) => commit('FETCH_ALL', response.data)).catch((error) => {console.log(error.status)});
  },

  create({commit}, {params , vue}) {
    allServices.create('values' ,params.form).then((response) => {
      commit('UPDATE', { result:response.data , type:'create' });
      vue.$toasted.success(`CREATED`);

    }).catch((error) => {});
  },
  update({commit},{params , vue}) {
    allServices.update('values' ,params.form).then((response) => {
      commit('UPDATE' , { result:response.data , type:'update' });
      vue.$toasted.success(`UPDATED`);
    }).catch((error) => {});
  },

  remove({commit},{id ,vue}) {
    allServices.delete('values' , id).then((response) => {
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
