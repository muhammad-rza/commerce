/* eslint-disable */
export default {
    data:()=>({
    routePrefix:[
        '/dashboard',
        '/auth'
    ],

    cancel:true,
    }),
    methods: {
      mergeDaAt (arg1, arg2) {
        return `${arg1}-${arg2}`;
      },

      disabledFields(arg , arg1) {

        if(arg == 0 && arg1==1) {

          return false;

        }
        else if(arg==0 && arg1!=1) {

          return true;

        }else if(arg1 == 1){

          return false;

        }else{

          return false;
        }

      },


      //MODALS ACTIOS

      onCancel() {

        this.cancel = true;

      },
      onConfirm() {
        this.cancel = false;
      },

      modalOpen(modalID) {

        $(`#${modalID}`).modal('show');

        // console.log(1212)

      }



    }


}