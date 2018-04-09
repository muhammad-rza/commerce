<template>


  <div class="modal" id="TemplateModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{template.title}} Modal</h4>
        </div>

        <form @submit.prevent>
          <div class="modal-body">
            <div class="row">

              <div class="clearfix">

                <div class="col-md-12">
                  <div class="form-group">
                    <label for="Name">Name</label>
                    <input id="Name" type="text" class="form-control" v-model="template.form.name" >
                  </div>
                </div>

              </div>

              <div class="clearfix">

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Field">Fields</label>
                    <input id="Field" type="text" class="form-control" v-model="searchQuery" @keyup="searchField" disabled>
                    <div style="max-height: 250px;overflow-y: auto;">
                      <ul v-if="_fields.length" class="list-group">
                        <li v-for="(field ,index) in _fields" class="list-group-item" @click="template.form.fields.push(field._id)">{{field.az.label}}</li>
                      </ul>
                    </div>
                  </div>
                </div>


                <!--{{ field.values }}-->
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Value">Fields of Template</label>
                    <div style="max-height: 250px;overflow-y: auto;">
                      <ul  class="list-group">
                        <li v-for="(_fieldOftemplate ,_index) in _fieldsOfTemplate" class="list-group-item clearfix">
                          <div class="pull-left">{{ _fieldOftemplate.az.label }} </div>
                          <div class="pull-right"><button class="btn btn-danger " @click="removeField(_fieldOftemplate._id)" >x</button></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="clearfix">

                <div class="col-md-6">

                  <div class="form-group">
                    <label>Status</label>
                    <br>
                    <input type="radio" id="one" value="true" v-model="template.form.status">
                    <label for="one">Active</label>
                    <br>
                    <input type="radio" id="two" value="false" v-model="template.form.status">
                    <label for="two">Deactive</label>
                  </div>

                </div>

              </div>


            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button @click="$emit('submitTemplate',template.title)" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </form>

      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>


</template>


<script>

  export default  {
    data:()=>({
      searchQuery:null,
    }),
    props:{
      template: {
        type:Object,
      },
      fields:{
        type:Array,
      }
    },

    computed:{
      _fields() {
           return this.fields.filter((field , index)=> {
                if(this.template.form.fields.includes(field._id)) {
                  return false;
                }else {
                  return true;
                }
            })
      },
      _fieldsOfTemplate() {
        return this.fields.filter((field , index)=> {
          if(this.template.form.fields.includes(field._id)) {
            return true;
          }else {
            return false;
          }
        })
      }
    },


    methods : {

      removeField(id) {

        return this.template.form.fields.map((field,index) => {

                if(id==field) {
                 return   this.template.form.fields.splice(index,1);
                }

        });
      },
      searchField() {

//        return this.fields.filter((el)=> {
//          return el.az.label.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
//        })

      },

      submitForm() {

//        this.$emit()

      },



    }

  }

</script>
