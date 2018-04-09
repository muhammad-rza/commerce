<template>
    <div>

      <section class="content-header clearfix">

        <div class="row">
        <h1 class="pull-left">
          Fields
        </h1>
        <div class="pull-right">


          <!--{{ $permission.can('/works/creates') }}-->
          <div>

            <button  data-toggle="modal" data-target="#FieldModal" @click="field = JSON.parse( JSON.stringify( bluePrint ) ); field.title='Create'"  class="btn  btn-info btn-flat pull-right"  >

              Create

            </button>

          </div>

        </div>


        </div>


      </section>

      <section class="content">

        <div class="row">
          <div v-if="!fields.length">
            <div  class="col-md-12 col-sm-12 col-xs-12"   >
              There is not any data ....
            </div>
          </div>

          <div v-else >
            <!--{{fields.length}}-->
            <!--{{fields}}-->
              <FieldList :fieldForModal="field" :fields="fields" />

          </div>

        </div>

      </section>

      <FieldModal :field="field" :values="values" v-on:submitField="submitForm" />
    </div>
</template>


<script>

  import FieldModal from '@/components/Field/FormModal'
  import FieldList from '@/components/Field/List';

  import { mapGetters } from "vuex";


  export default {
    computed:{
      ...mapGetters("fields", [
        "fields",
      ]),

      ...mapGetters("values", [
        "values",
      ]),

    },

    data:()=>({
      bluePrint:{},
      field:{
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
          values:[],
          key:'',
          sort:0

        }
      }
    }),

    components: {
      FieldList,
      FieldModal
    },

    methods:{

      create(){ this.$store.dispatch('fields/create',{params:this.field , vue:this}); },
      edit(){ this.$store.dispatch('fields/update',{params:this.field , vue:this}); },

      submitForm(type) {

        this[type.toLowerCase()]();

      },

      _values() {
        if(!this.values.length) {
          this.$store.dispatch('values/all');
        }
      },

      all(params) {
          this.$store.dispatch('fields/all',params);

      }

    },


    created() {
      this.bluePrint= JSON.parse( JSON.stringify( this.field ) );
//      this.bluePrint= Object.create(this.bluePrint);
    },

    mounted() {
        this.all(null);
        this._values();
    }

  };
</script>
