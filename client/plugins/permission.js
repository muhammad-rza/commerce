import Vue from 'vue';



export default function({route, app , store, redirect  , isServer, req}) {

  return Vue.prototype.$permission = {


    can(checkingFrom) {

      // checkingFrom = checkingFrom.replace(/^\/|\/$/g, '');
      //
      if(!store.getters['permissions/all'].permission)
        return false;

      let hasAccess = store.getters['permissions/all'].permission.find((item , index) => {

         return item.url == checkingFrom;


      })

      if(hasAccess) {
        return true

      }else {
        return false;
      }


    },



    onlyAdmin(type) {
      return  type==1;

    },

    sayHello() {

      console.log('everything is okay');

    }


  }

}


// permission;


// item.url = item.url.replace(/^\/|\/$/g, '');
// return item.url == checkingFrom;

