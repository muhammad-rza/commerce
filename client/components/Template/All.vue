<template>
    <div>

      <section class="content-header clearfix">

        <div class="row">
        <h1 class="pull-left">
          Templates
        </h1>
        <div class="pull-right">


          <!--{{ $permission.can('/works/creates') }}-->
          <div>

            <button  data-toggle="modal" data-target="#TemplateModal" @click="template = JSON.parse( JSON.stringify( bluePrint ) ); template.title='Create'"  class="btn  btn-info btn-flat pull-right"  >

              Create

            </button>

          </div>

        </div>


        </div>


      </section>

      <section class="content">

        <div class="row">
          <div v-if="!templates.length">
            <div  class="col-md-12 col-sm-12 col-xs-12"   >
              There is not any data ....
            </div>
          </div>

          <div v-else >
            <!--{{templates.length}}-->
            <!--{{templates}}-->
              <TemplateList :templateForModal="template" :templates="templates" />

          </div>

        </div>

      </section>

      <TemplateModal :template="template" :fields="fields" v-on:submitTemplate="submitForm" />
    </div>
</template>


<script>

  import TemplateModal from '@/components/Template/FormModal'
  import TemplateList from '@/components/Template/List';

  import { mapGetters } from "vuex";


  export default {
    computed:{
      ...mapGetters("templates", [
        "templates",
      ]),

      ...mapGetters("fields", [
        "fields",
      ]),

    },

    data:()=>({
      bluePrint:{},
      template:{
        title:"",
        form:{
          az:{
            label:""
          },
          ru:{
            label:""
         },
          status:true,
          required:true,
          type:'',
          fields:[],
          key:'',
          sort:0

        }
      }
    }),

    components: {
      TemplateList,
      TemplateModal
    },

    methods:{

      create(){ this.$store.dispatch('templates/create',{params:this.template , vue:this}); },
      edit(){ this.$store.dispatch('templates/update',{params:this.template , vue:this}); },

      submitForm(type) {

        this[type.toLowerCase()]();

      },

      _fields() {
        if(!this.fields.length) {
          this.$store.dispatch('fields/all');
        }
      },

      all(params) {
          this.$store.dispatch('templates/all',params);

      }

    },


    created() {
      this.bluePrint= JSON.parse( JSON.stringify( this.template ) );
//      this.bluePrint= Object.create(this.bluePrint);
    },

    mounted() {
        this.all(null);
        this._fields();
    }

  };
</script>
