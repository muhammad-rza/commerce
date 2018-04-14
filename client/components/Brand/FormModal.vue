<template>


  <div class="modal" id="BrandModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{brand.title}} Modal</h4>
        </div>

        <form @submit.prevent>
          <div class="modal-body">
            <div class="row">

              <div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="brandAZ">Name</label>
                    <input id="brandAZ" type="text" class="form-control" v-model="brand.form.name" >
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="brandRu">Slug</label>
                    <input id="brandRu" type="text" class="form-control" v-model="brand.form.slug" >
                  </div>
                </div>

              </div>

              <div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Logo">Logo</label>
                    <input id="Logo" type="file" class="form-control"  @change="previewImage($event,brand)" accept="image/*">
                    <div class="logo_img" style="width:150px">

                      <!--<img v-if="imageData.length" style="width:100%" :src="imageData" alt="">-->
                      <img style="width:100%" :src="brand.form.logo" alt="">

                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Banner">Banner</label>
                    <input id="Banner" type="text" class="form-control" v-model="brand.form.banner" >
                  </div>
                </div>

              </div>

              <!--<div>-->

              <!--<div class="col-md-6">-->
              <!--<div class="form-group">-->
              <!--<label for="SlugAz">Slug az</label>-->
              <!--<input id="SlugAz" type="text" class="form-control" v-model="brand.form.az.slug" >-->
              <!--</div>-->
              <!--</div>-->

              <!--<div class="col-md-6">-->
              <!--<div class="form-group">-->
              <!--<label for="SlugRu">Slug ru</label>-->
              <!--<input id="SlugRu" type="text" class="form-control" v-model="brand.form.ru.slug" >-->
              <!--</div>-->
              <!--</div>-->

              <!--</div>-->

              <div>

                <div class="col-md-6">

                  <div class="form-group">
                    {{brand.form.status}}
                    <label>Status</label>
                    <br>
                    <input type="radio" id="Active" value="true" v-model="brand.form.status">
                    <label for="Active">Active</label>
                    <br>
                    <input type="radio" id="Deactive" value="false" v-model="brand.form.status">
                    <label for="Deactive">Deactive</label>
                  </div>

                </div>

              </div>

            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button @click="submitForm(brand.title)" type="button" class="btn btn-primary">Save changes</button>
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
      brand: {
        type:Object
      },
    },

    data:()=>({
//      imageData: "" //base64
    }),

    methods : {

      submitForm(title) {
        this.$emit('submitbrand',title)
      },
      previewImage(event , imageData) {
        // Reference to the DOM input element
        var input = event.target;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader();
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            imageData.form.logo = e.target.result;
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0]);
        }
      }

    },


  }

</script>
