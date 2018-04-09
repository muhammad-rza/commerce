<template>


  <div class="modal" id="CategoryModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{category.title}} Modal</h4>
        </div>

        <form @submit.prevent>
          <div class="modal-body">
            <div class="row">

              <div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="CategoryAZ">Name az</label>
                    <input id="CategoryAZ" type="text" class="form-control" v-model="category.form.az.name" >
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="CategoryRu">Name ru</label>
                    <input id="CategoryRu" type="text" class="form-control" v-model="category.form.ru.name" >
                  </div>
                </div>

              </div>


              <div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="SlugAz">Slug az</label>
                    <input id="SlugAz" type="text" class="form-control" v-model="category.form.az.slug" >
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="SlugRu">Slug ru</label>
                    <input id="SlugRu" type="text" class="form-control" v-model="category.form.ru.slug" >
                  </div>
                </div>

              </div>

              <div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Template">Template</label>
                    <select class="form-control input_type select3" id="input_type" v-model="category.form.template">
                      <option v-for="(template , index) in templates" :key="index" :value="template._id" >{{ template.name }}</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6" v-if="categories.length">
                  <div class="form-group">
                    <label for="Category">Category</label>
                    <select class="form-control input_type select3" id="Category" v-model="category.form.parent_id">
                      <option value="0" >__PARENT__</option>
                      <option v-for="(cat , index) in categories" :key="index" :value="cat._id" v-if="cat._id!=category.form._id" >{{ cat.az.name }}</option>
                    </select>
                  </div>
                </div>

              </div>

              <div>

                <div class="col-md-6">

                  <div class="form-group">
                    {{category.form.status}}
                    <label>Status</label>
                      <br>
                      <input type="radio" id="Active" value="true" v-model="category.form.status">
                      <label for="Active">Active</label>
                      <br>
                      <input type="radio" id="Deactive" value="false" v-model="category.form.status">
                      <label for="Deactive">Deactive</label>
                  </div>

                </div>

              </div>

            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button @click="$emit('submitCategory',category.title)" type="button" class="btn btn-primary">Save changes</button>
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
      category: {
        type:Object
      },
      templates:{
        type:Array
      },
      categories:{
        type:Array
      }
    },

    methods : {


    },


  }

</script>
