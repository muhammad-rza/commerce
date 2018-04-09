/* eslint-disable */

export default ({ app , store }) => {

  app.router.beforeEach((to, from , next) => {

    console.log(store.getters['auth/auth']);

    next();

  })
}
/
