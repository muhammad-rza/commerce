<template>

  <div class="box box-default">

    <div class="box-body table-responsive">
      <!--{{ values }}-->
      <table id="field" class="table table-bordered table-striped">

        <thead>
        <tr>
          <th>#</th>
          <th>Label AZ</th>
          <th>Label RU</th>
          <th>Key</th>
          <th>Type</th>
          <th>Required</th>
          <th>Status</th>
          <th>Action</th>

        </tr>
        </thead>


        <tbody>

        <tr  v-for="(field , index) in JSON.parse(JSON.stringify(fields))"  :key="field._id">
          <td>
            <span>{{field._id}}</span>
          </td>
          <td>
            <span>{{field.az.label}}</span>
          </td>
          <td>
            <span>{{field.ru.label}}</span>
          </td>
          <td>
            <span>{{field.key}}</span>
          </td>
          <td>
            <span>{{field.type}}</span>
          </td>
          <td>
            <span>{{field.required}}</span>
          </td>
          <td>
            <span>{{field.status}}</span>
          </td>
          <td>

            <button  data-toggle="modal" data-target="#FieldModal" @click="fieldForModal.form=field;fieldForModal.title='Edit' " class="btn btn-custom-1 btn-primary mr-5"  >

              Edit

            </button>

            <button class="btn btn-custom-1 btn-danger mr-5" @click="remove(field._id)" >Delete</button>
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
      fields:{
        type:Array,
      },
      fieldForModal:{
        type:Object
      }
    },
    methods: {
      remove(id) {
        this.$store.dispatch('fields/remove',{id , vue:this})
      }
    }
  }

</script>
