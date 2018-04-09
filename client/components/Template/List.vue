<template>

  <div class="box box-default">

    <div class="box-body table-responsive">
      <!--{{ values }}-->
      <table id="field" class="table table-bordered table-striped">

        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>

        </tr>
        </thead>


        <tbody>

        <tr  v-for="(template , index) in JSON.parse(JSON.stringify(templates))"  :key="template._id">
          <td>
            <span>{{template._id}}</span>
          </td>
          <td>
            <span>{{template.name}}</span>
          </td>
          <td>
            <span>{{template.status}}</span>
          </td>
          <td>

            <button  data-toggle="modal" data-target="#TemplateModal" @click="templateForModal.form=template;templateForModal.title='Edit' " class="btn btn-custom-1 btn-primary mr-5"  >

              Edit

            </button>

            <button class="btn btn-custom-1 btn-danger mr-5" @click="remove(template._id)" >Delete</button>
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
      templates:{
        type:Array,
      },
      templateForModal:{
        type:Object
      }
    },
    methods: {
      remove(id) {
        this.$store.dispatch('templates/remove',{id , vue:this})
      }
    }
  }

</script>
