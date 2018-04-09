<template>
    <div>

      <section class="content-header clearfix">

        <div class="row">
        <h1 class="pull-left">
          Categories
        </h1>
        <div class="pull-right">

          <!--{{ $permission.can('/works/creates') }}-->


          <div>

            <button  data-toggle="modal" data-target="#CategoryModal" @click="category = JSON.parse( JSON.stringify( bluePrint ) ); category.title='Create' "  class="btn  btn-info btn-flat pull-right"  >

              Create

            </button>

          </div>

        </div>


        </div>


      </section>

      <section class="content">

        <div class="row">

          <div v-if="!categories.length">
            <div  class="col-md-12 col-sm-12 col-xs-12"   >
              There is not any category ....
            </div>
          </div>

          <div v-else >

              <Categorylist :categoryForModal="category" :categories="categories" :templates="templates" />

          </div>

        </div>

      </section>

      <CategoryModal :category="category" :categories="categories" :templates="templates" v-on:submitCategory="submitForm" />

    </div>
</template>


<script>

  import CategoryModal from '@/components/Category/FormModal';
  import Categorylist from '@/components/Category/List';
  import { mapGetters } from "vuex";

  export default {
    computed:{
      ...mapGetters("categories", [
        "categories",
      ]),
      ...mapGetters("templates", [
        "templates",
      ]),
    },
    data:()=>({
      bluePrint:{},
      category:{
        title:"",
        form:{
          az: {
            name: "",
            slug: ""
          },
          ru: {
            name: "",
            slug: ""
          },
          template: "",
          // url:String,

          parent_id: 0,
          status:true,
        }
      }
    }),

    components: {
      Categorylist,
      CategoryModal
    },

    methods:{

      create(){ this.$store.dispatch('categories/create',{params:this.category , vue:this}); },
      edit(){ this.$store.dispatch('categories/update',{params:this.category , vue:this}); },

      submitForm(type) {

        this[type.toLowerCase()]();

      },

      _templates() {
        if(!this.templates.length) {
          this.$store.dispatch('templates/all');
        }
      },

      all(params) {
        this.$store.dispatch('categories/all',params);

      }

    },


    created() {
      this.bluePrint= JSON.parse( JSON.stringify( this.category ) );
//      this.bluePrint= Object.create(this.bluePrint);
    },

    mounted() {
      this.all(null);
      this._templates();
    }

  };
</script>
