<template>

  <div class="box box-default">

    <div class="box-body table-responsive">

      <table id="category" class="table table-bordered table-striped">

        <thead>
        <tr>
          <th>#</th>
          <th>Name AZ</th>
          <th>Name RU</th>
          <th>Template Id</th>
          <th>Status</th>
          <th>Action</th>

        </tr>
        </thead>


        <tbody>

        <tr  v-for="(category , index) in categories"  :key="category._id">
          <td >
            <span>{{category.az.name}}</span>
          </td>
          <td >
            <span>{{category.ru.name}}</span>
          </td>
          <td >
            <span>{{category.template}}</span>
          </td>
          <td >
            <router-link :to="setUrl('category/edit/'+category._id)"  class="btn btn-custom-1 btn-primary mr-5">
              Edit
            </router-link>
            <button class="btn btn-custom-1 btn-danger mr-5" @click="deleteColumn(category._id)" >Delete</button>
          </td>
        </tr>

        </tbody>


      </table>

    </div>

  </div>

</template>
