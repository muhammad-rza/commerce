/* eslint-disable */
export default {



  methods:{

    workStatusUp(id , work) {
//            this.$store.dispatch('works/status',{id , data , vue:this});
      this.$store.dispatch('works/update' , { work , id , vue:this });
    },

    deleteWork(id) {
      if (!window.confirm("Do you really want to delete it ?"))
        return false;

      this.$store.dispatch('works/delete',{id , vue:this});

    },
    showHistoryRow(work) {

//            if(!work.editedRow.length>0) return false;
      this.historyRow = work;

      $("#modal-history-row").modal('show');


    },
    setRow(row , index) {


//              var c =  Object.freeze(row.emptyRow);

//            var c = Object.assign({}, this.zzz);

      if(!!row.emptyRow) {
        var newObj = JSON.parse(JSON.stringify(row.emptyRow))



        row.rows.push(newObj);
      }
      else {
        alert('something wrong')
      }


    },

    deleteRow(row , index) {

      if (!window.confirm("Do you really want to delete it ?"))
        return false;

      if(row.id) {

        this.$store.dispatch('works/rowDelete',{row , vue:this})

      }else if(typeof row.id == "undefined") {

//                delete row;
//                  console.log(row);

//                  return false;
//                  delete [index];
        this.works.map((work , workIndex)=>{

          if(work.id ==row.work_id ) {

            work['rows'].splice(index ,1);

//                  console.log(work);
          }

        })




      }



    },
    updateRow(row , index , event) {

      $(event.target).closest('.updateRow').prop('disabled' , true);

      if(row.id) {

        this.$store.dispatch('works/rowUpdate',{row ,index ,  vue:this})
          .then(response => {
            $(event.target).closest('.updateRow').prop('disabled' , false);
          }, error => {
            console.error("Got nothing from server. Prompt user to check internet connection and try again")
          })


      }else {
        this.$store.dispatch('works/rowCreate',{row , index ,vue:this})
          .then(res => $(event.target).closest('.updateRow').prop('disabled' , false));
      }



    }

  },



}