const actions = {

  all: ({ commit }, data) => {

  menuService.all(data)
  .then((response) => {

  commit('ALL', response.data.user.menu);
  // commit('../auth/SET_USER', response.data.user.user);
  // console.log(response.data.user.menu)
  // console.log(response);
  // return response
  })
  .catch((error) => {
    console.log(error);
  })

},




}
















export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,

};
