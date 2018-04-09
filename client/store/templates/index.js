import allServices from '@/services/allInOne'

const state = {

  templates:[]
};

const getters = {

  templates : (state) => {

    return state.templates;

  },

};


const mutations = {

  FETCH_ALL(state,result) {
    state.templates = result;
    // state.templates[0]= undefined;

  },

  UPDATE(state,payload) {

    $("#TemplateModal").modal('hide');

    if(payload.type=='create') {

       state.templates.unshift(payload.result)
    }else {
     return state.templates.find((value,index)=> {

       if(value._id == payload.result._id) {return state.templates.splice(index,1 , payload.result) }

      })
    }
  },

  REMOVE(state,id) {

    return state.templates.find((value,index)=> {

      if(value._id == id) {return state.templates.splice(index,1) }

  });



  }

};

const actions = {

  all({commit},params) {
    allServices.all('templates').then((response) => commit('FETCH_ALL', response.data)).catch((error) => {console.log(error.status)});
  },

  create({commit}, {params , vue}) {
    allServices.create('templates' ,params.form).then((response) => {
      commit('UPDATE', { result:response.data , type:'create' });
      vue.$toasted.success(`CREATED`);

    }).catch((error) => {});
  },
  update({commit},{params , vue}) {
    allServices.update('templates' ,params.form).then((response) => {
      commit('UPDATE' , { result:response.data , type:'update' });
      vue.$toasted.success(`UPDATED`);
    }).catch((error) => {});
  },

  remove({commit},{id ,vue}) {
    allServices.delete('templates' , id).then((response) => {
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
