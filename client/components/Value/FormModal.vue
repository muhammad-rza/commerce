<template>


  <div class="modal" id="ValueModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{value.title}} Modal</h4>
        </div>

        <form @submit.prevent>
          <div class="modal-body">
            <div class="row">

              <div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="LabelAz">Label az</label>
                    <input id="LabelAz" type="text" class="form-control" v-model="value.form.az.label" >
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="LabelRu">Label ru</label>
                    <input id="LabelRu" type="text" class="form-control" v-model="value.form.ru.label" >
                  </div>
                </div>

              </div>


              <div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="PlaceholderAz">Placeholder az</label>
                    <input id="PlaceholderAz" type="text" class="form-control" v-model="value.form.az.placeholder" >
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="PlaceholderRu">Placeholder ru</label>
                    <input id="PlaceholderRu" type="text" class="form-control" v-model="value.form.ru.placeholder" >
                  </div>
                </div>

              </div>

              <div>

                <div class="col-md-6">

                  <div class="form-group">
                    <label>Status</label>
                    <br>
                    <input type="radio" id="one" value="true" v-model="value.form.status">
                    <label for="one">Active</label>
                    <br>
                    <input type="radio" id="two" value="false" v-model="value.form.status">
                    <label for="two">Deactive</label>
                  </div>

                </div>

              </div>


            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button @click="$emit('submitForm',value.title)" type="button" class="btn btn-primary">Save changes</button>
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

    props:{
      value: {
        type:Object,
      }
    },

    methods : {

      submitForm() {

//        this.$emit()

      }

    }

  }

</script>
