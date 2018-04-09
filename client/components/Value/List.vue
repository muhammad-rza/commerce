<template>

  <div class="box box-default">

    <div class="box-body table-responsive">
      <!--{{ values }}-->
      <table id="value" class="table table-bordered table-striped">

        <thead>
        <tr>
          <th>#</th>
          <th>Label AZ</th>
          <th>Label RU</th>
          <th>Placeholder AZ</th>
          <th>Placeholder RU</th>
          <th>Status</th>
          <th>Action</th>

        </tr>
        </thead>


        <tbody>

        <tr  v-for="(value , index) in JSON.parse(JSON.stringify(values))"  :key="value._id">
          <td >
            <span>{{value._id}}</span>
          </td>
          <td >
            <span>{{value.az.label}}</span>
          </td>
          <td >
            <span>{{value.ru.label}}</span>
          </td>
          <td >
            <span>{{value.az.placeholder}}</span>
          </td>
          <td >
            <span>{{value.ru.placeholder}}</span>
          </td>
          <td >
            <span>{{value.status}}</span>
          </td>
          <td >

            <button  data-toggle="modal" data-target="#ValueModal" @click="valueForModal.form=value;valueForModal.title='Edit' " class="btn btn-custom-1 btn-primary mr-5"  >

              Edit

            </button>

            <button class="btn btn-custom-1 btn-danger mr-5" @click="remove(value._id)" >Delete</button>
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
      values:{
        type:Array,
      },
      valueForModal:{
        type:Object
      }
    },
    methods: {
      remove(id) {
        this.$store.dispatch('values/remove',{id , vue:this})
      }
    }
  }

</script>
