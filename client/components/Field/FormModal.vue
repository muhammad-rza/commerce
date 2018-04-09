<template>


  <div class="modal" id="FieldModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{field.title}} Modal</h4>
        </div>

        <form @submit.prevent>
          <div class="modal-body">
            <div class="row">

              <div class="clearfix">

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="LabelAz">Label az</label>
                    <input id="LabelAz" type="text" class="form-control" v-model="field.form.az.label" >
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="LabelRu">Label ru</label>
                    <input id="LabelRu" type="text" class="form-control" v-model="field.form.ru.label" >
                  </div>
                </div>

              </div>


              <div class="clearfix">

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Value">Values</label>
                    <input id="Value" type="text" class="form-control" v-model="searchQuery" @keyup="searchValue" disabled>
                    <div style="max-height: 250px;overflow-y: auto;">
                      <ul v-if="_values.length" class="list-group">
                        <li v-for="(value ,index) in _values" class="list-group-item" @click="field.form.values.push(value._id)">{{value.az.label}}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!--{{ field.values }}-->
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Value">Values of Fields</label>
                    <div style="max-height: 250px;overflow-y: auto;">
                      <ul  class="list-group">
                        <li v-for="(valueOfField ,_index) in _valuesOfField" class="list-group-item clearfix">
                          <div class="pull-left">{{ valueOfField.az.label }} </div>
                          <div class="pull-right"><button class="btn btn-danger " @click="removeValue(valueOfField._id)" >x</button></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


              </div>

              <div class="clearfix">

                <div class="col-md-6">

                  <div class="form-group">
                    <label for="input_type">Type</label>
                    <br>
                    <select class="form-control input_type select3" id="input_type" v-model="field.form.type">
                      <option v-for="type in input_type" :key="type" :value="type" >{{ type }}</option>
                    </select>
                  </div>

                </div>


                <div class="col-md-6">

                  <div class="form-group">
                    <label for="Key">Key</label>
                    <br>
                    <input id="Key" type="text" class="form-control" v-model="field.form.key" >
                  </div>

                </div>


              </div>


              <div>

                <div class="col-md-6">

                  <div class="form-group">
                    <label>Status</label>
                    <br>
                    <input type="radio" id="one" value="true" v-model="field.form.status">
                    <label for="one">Active</label>
                    <br>
                    <input type="radio" id="two" value="false" v-model="field.form.status">
                    <label for="two">Deactive</label>
                  </div>

                </div>


                <div class="col-md-6">

                  <div class="form-group">
                    <label >Required</label>
                    <br>
                    <input type="radio" id="Required_1" value="true" v-model="field.form.required">
                    <label for="one">Required</label>
                    <br>
                    <input type="radio" id="Required_2" value="false" v-model="field.form.required">
                    <label for="two">Not required</label>
                  </div>

                </div>


              </div>


            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button @click="$emit('submitField',field.title)" type="button" class="btn btn-primary">Save changes</button>
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
      input_type:['checkbox','text','number','textarea','select' , 'date','radio'],
    }),
    props:{
      field: {
        type:Object,
      },
      values:{
        type:Array,
      }
    },

    computed:{
      _values() {
           return this.values.filter((value , index)=> {
                if(this.field.form.values.includes(value._id)) {
                  return false;
                }else {
                  return true;
                }
            })
      },
      _valuesOfField() {
        return this.values.filter((value , index)=> {
          if(this.field.form.values.includes(value._id)) {
            return true;
          }else {
            return false;
          }
        })
      }
    },


    methods : {
      addValue() {},
      removeValue(id) {

        return this.field.form.values.map((value,index) => {

                if(id==value) {
                 return   this.field.form.values.splice(index,1);
                }

        });
      },
      searchValue() {

//        return this.values.filter((el)=> {
//          return el.az.label.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
//        })

      },

      submitForm() {

//        this.$emit()

      },



    }

  }

</script>
