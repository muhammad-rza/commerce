/* eslint-disable */
export default {


  methods:{

    workStatusUp(id , column) {

      this.$store.dispatch('columns/update',{column , id ,  vue:this});
    },

    deleteColumn(id) {
      if (!window.confirm("Do you really want to delete it ?"))
        return false;

      this.$store.dispatch('columns/delete',{id , vue:this});

    }

  }



}