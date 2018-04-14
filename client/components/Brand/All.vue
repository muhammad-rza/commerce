<template>
    <div>

      <section class="content-header clearfix">

        <div class="row">
        <h1 class="pull-left">
          Brands
        </h1>
        <div class="pull-right">


          <!--{{ $permission.can('/works/creates') }}-->
          <div>

            <button  data-toggle="modal" data-target="#BrandModal" @click="brand = JSON.parse( JSON.stringify( bluePrint ) ); brand.title='Create'"  class="btn  btn-info btn-flat pull-right"  >

              Create

            </button>

          </div>

        </div>


        </div>


      </section>

      <section class="content">

        <div class="row">
          <div v-if="!brands.length">
            <div  class="col-md-12 col-sm-12 col-xs-12"   >
              There is not any data ....
            </div>
          </div>

          <div v-else >
            <!--{{brands.length}}-->
            <!--{{brands}}-->
              <BrandList :brandForModal="brand" :brands="brands" />

          </div>

        </div>

      </section>

      <BrandModal :brand="brand" v-on:submitbrand="submitForm" />
    </div>
</template>


<script>

  import BrandModal from '@/components/Brand/FormModal'
  import BrandList from '@/components/Brand/List';

  import { mapGetters } from "vuex";


  export default {
    computed:{
      ...mapGetters("brands", [
        "brands",
      ]),
    },

    data:()=>({
      bluePrint:{},
      brand:{
        title:"",
        form:{
          name:"",
          slug:"",
          logo:"",
          banner:"",
          status:true,
        }
      }
    }),

    components: {
      BrandList,
      BrandModal
    },

    methods:{

      create(){ this.$store.dispatch('brands/create',{params:this.brand , vue:this}); },
      edit(){ this.$store.dispatch('brands/update',{params:this.brand , vue:this}); },

      submitForm(type) {

        this[type.toLowerCase()]();

      },

      all(params) {
          this.$store.dispatch('brands/all',params);

      }

    },


    created() {
      this.bluePrint= JSON.parse( JSON.stringify( this.brand ) );
//      this.bluePrint= Object.create(this.bluePrint);
    },

    mounted() {
        this.all(null);
    }

  };
</script>
