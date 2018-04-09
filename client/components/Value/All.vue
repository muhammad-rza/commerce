<template>
    <div>

      <section class="content-header clearfix">

        <div class="row">
        <h1 class="pull-left">
          Values
        </h1>
        <div class="pull-right">


          <!--{{ $permission.can('/works/creates') }}-->

          <div>

            <button  data-toggle="modal" data-target="#ValueModal" @click="value = JSON.parse( JSON.stringify( bluePrint ) ); value.title='Create'"  class="btn  btn-info btn-flat pull-right"  >

              Create

            </button>

          </div>

        </div>


        </div>


      </section>

      <section class="content">

        <div class="row">
          <div v-if="!values.length">
            <div  class="col-md-12 col-sm-12 col-xs-12"   >
              There is not any data ....
            </div>
          </div>

          <div v-else >
            <!--{{values.length}}-->
            <!--{{values}}-->
              <ValueList :valueForModal="value" :values="values" />

          </div>

        </div>

      </section>

      <ValueModal :value="value" v-on:submitForm="submitForm" />

    </div>
</template>


<script>

  import ValueModal from '@/components/Value/FormModal'
  import ValueList from '@/components/Value/List';

  import { mapGetters } from "vuex";


  export default {
    computed:{
      ...mapGetters("values", [
        "values",
      ]),

    },

    data:()=>({
      bluePrint:{},
      value:{
        title:"",
        form:{
          az:{
            label:"",
            placeholder:"",
          },
          ru:{
            label:"",
            placeholder:"",
         },
          status:true,

        }
      }
    }),

    components: {
      ValueList,
      ValueModal
    },

    methods:{

      create(){ this.$store.dispatch('values/create',{params:this.value , vue:this}); },
      edit(){ this.$store.dispatch('values/update',{params:this.value , vue:this}); },

      submitForm(type) {

        this[type.toLowerCase()]();

      },

      all(params) {
          this.$store.dispatch('values/all',params);
      }

    },


    created() {
      this.bluePrint= JSON.parse( JSON.stringify( this.value ) );
//      this.bluePrint= Object.create(this.bluePrint);
    },

    mounted() {

        this.all(null);

//        setInterval(()=>{ this.$store.dispatch('values/test',{}); },2000)
    }

  };
</script>
