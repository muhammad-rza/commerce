<template>

  <div class="box box-default">

    <div class="box-body table-responsive">

      <table id="brand" class="table table-bordered table-striped">

        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Slug</th>
          <th>Logo</th>
          <th>Status</th>
          <th>Action</th>

        </tr>
        </thead>


        <tbody>

        <tr  v-for="(brand , index) in JSON.parse(JSON.stringify(brands))"  :key="brand._id">
          <td>
            <span>{{brand._id}}</span>
          </td>

          <td>
            <span>{{brand.name}}</span>
          </td>

          <td>
            <span>{{brand.slug}}</span>
          </td>

          <td>
            <img :src="apiIamgePath + brand.logo" style="max-height:50px" />
          </td>

          <td>
            <span>{{brand.status}}</span>
          </td>
          <td>
            <button  data-toggle="modal" data-target="#BrandModal" @click="brandForModal.form=brand;brandForModal.title='Edit' " class="btn btn-custom-1 btn-primary mr-5"  >

              Edit

            </button>

            <button class="btn btn-custom-1 btn-danger mr-5" @click="remove(brand._id)" >Delete</button>
          </td>
        </tr>

        </tbody>


      </table>

    </div>

  </div>

</template>


<script>

  import Urls from '@/components/mixins/Urls'
  export default {

    mixins:[Urls],

    props:{
      brands:{
        type:Array
      },
      brandForModal:Object
    },
    methods: {
      remove(id) {
        this.$store.dispatch('brands/remove',{id , vue:this})
      }
    }
  }

</script>
