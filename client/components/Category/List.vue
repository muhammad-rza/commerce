<template>

  <div class="box box-default">

    <div class="box-body table-responsive">

      <table id="category" class="table table-bordered table-striped">

        <thead>
        <tr>
          <th>#</th>
          <th>Name AZ</th>
          <th>Name RU</th>
          <th>Slug AZ</th>
          <th>Slug RU</th>
          <th>Template</th>
          <th>Category</th>
          <th>Status</th>
          <th>Action</th>

        </tr>
        </thead>


        <tbody>

        <tr  v-for="(category , index) in JSON.parse(JSON.stringify(categories))"  :key="category._id">
          <td>
            <span>{{category._id}}</span>
          </td>
          <td>
            <span>{{category.az.name}}</span>
          </td>
          <td>
            <span>{{category.ru.name}}</span>
          </td>
          <td>
            <span>{{category.az.slug}}</span>
          </td>
          <td>
            <span>{{category.ru.slug}}</span>
          <td>
           <span>{{ findTempName(category.template) }}</span>
          </td>
          <td>
            <span>{{ findCatName(category.parent_id) }}</span>
          </td>
          <td>
            <span>{{category.status}}</span>
          </td>
          <td>
            <button  data-toggle="modal" data-target="#CategoryModal" @click="categoryForModal.form=category;categoryForModal.title='Edit' " class="btn btn-custom-1 btn-primary mr-5"  >

              Edit

            </button>

            <button class="btn btn-custom-1 btn-danger mr-5" @click="remove(category._id)" >Delete</button>
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
      categories:{
        type:Array
      },
      templates:{
        type:Array
      },
      categoryForModal:{
        type:Object,
      }
    },
    methods: {
      remove(id) {
        this.$store.dispatch('categories/remove',{id , vue:this})
      },
      findCatName(parent_id) {
        var category =  this.categories.find((cat,index)=> (cat._id == parent_id ) ? cat : false  );

        if(!!category) {
          return category.az.name;
        }else {
          return '__PARENT__'
        }

      },
      findTempName(template_id) {

        var template =  this.templates.find((tem,index)=> (tem._id == template_id ) ? tem : false  );

        if(!!template) {
          return template.name;
        }else {
          return '__EMPTY__'
        }

      }
    }
  }

</script>
