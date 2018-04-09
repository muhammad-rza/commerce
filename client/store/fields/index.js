import allServices from '@/services/allInOne'

const state = {

  fields:[]
};

const getters = {

  fields : (state) => {

    return state.fields;

  },

};


const mutations = {

  FETCH_ALL(state,result) {
    state.fields = result;
    // state.fields[0]= undefined;

  },

  UPDATE(state,payload) {

    $("#FieldModal").modal('hide');

    if(payload.type=='create') {

       state.fields.unshift(payload.result)
    }else {
     return state.fields.find((value,index)=> {

       if(value._id == payload.result._id) {return state.fields.splice(index,1 , payload.result) }

      })
    }
  },

  REMOVE(state,id) {

    return state.fields.find((value,index)=> {

      if(value._id == id) {return state.fields.splice(index,1) }

  });



  }

};

const actions = {

  all({commit},params) {
    allServices.all('fields').then((response) => commit('FETCH_ALL', response.data)).catch((error) => {console.log(error.status)});
  },

  create({commit}, {params , vue}) {
    allServices.create('fields' ,params.form).then((response) => {
      commit('UPDATE', { result:response.data , type:'create' });
      vue.$toasted.success(`CREATED`);

    }).catch((error) => {});
  },
  update({commit},{params , vue}) {
    allServices.update('fields' ,params.form).then((response) => {
      commit('UPDATE' , { result:response.data , type:'update' });
      vue.$toasted.success(`UPDATED`);
    }).catch((error) => {});
  },

  remove({commit},{id ,vue}) {
    allServices.delete('fields' , id).then((response) => {
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
