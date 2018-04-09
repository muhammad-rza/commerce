<template>
  <div class="skin-blue sidebar-mini fixed">
      <HeaderComponent />
    <LeftSideBarComponent />

    <div class="content-wrapper" style="min-height: 1126px;">
    <!--  .content -->
        <router-view/>
    <!-- /.content -->
    </div>

  </div>
</template>



<script>
/* eslint-disable */

import HeaderComponent from "@/components/include/Header.vue";
import LeftSideBarComponent from "@/components/include/LeftMenu/LeftSideBar.vue";
//import LeftSideBarComponent from "../components/parts/leftSide/leftSideBar.vue";



export default {

  components: {
    HeaderComponent,
    LeftSideBarComponent
  },

  mounted() {



  },

  head: {

      meta: [
          { charset: 'utf-8' },
          { name: 'ROBOTS', content: 'NOINDEX, NOFOLLOW' },

      ],

    script: [
      { src: "/bower_components/jquery/dist/jquery.min.js" },
      { src: "/bower_components/select2/dist/js/select2.full.min.js" },
      { src: "/bower_components/bootstrap/dist/js/bootstrap.min.js" },
      { src: "/bower_components/jquery-slimscroll/jquery.slimscroll.min.js" },
      { src: "/bower_components/fastclick/lib/fastclick.js" },
      { src: "/bower_components/moment/min/moment.min.js" },
      { src: "/dist/js/adminlte.min.js" },
      { src: "/bower_components/bootstrap-daterangepicker/daterangepicker.js" },
      { src: "https://rawgit.com/RickStrahl/jquery-resizable/master/src/jquery-resizable.js" },

      { src: "/bower_components/datatables.net/js/jquery.dataTables.min.js" },

      { src: "/bower_components/select2/dist/js/select2.full.min.js" },
      { src: "/plugins/input-mask/jquery.inputmask.js" },
      { src: "/plugins/input-mask/jquery.inputmask.date.extensions.js" },
      { src: "/plugins/input-mask/jquery.inputmask.extensions.js" },

    //   { src: "/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js" },
      { src: "/plugins/timepicker/bootstrap-timepicker.min.js" },
//      { src: "/plugins/jQueryUI/sortable.js" },

      { src:  "/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/bower_components/select2/dist/css/select2.min.css"
      },
      {
        rel: "stylesheet",
        href: "/bower_components/bootstrap/dist/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "/bower_components/font-awesome/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "/plugins/timepicker/bootstrap-timepicker.min.css"
      },
      {
        rel: "stylesheet",
        href: "/bower_components/bootstrap-daterangepicker/daterangepicker.css"
      },
      {
        rel: "stylesheet",
        href:  "/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
      },
      {
        rel: "stylesheet",
        href: "/bower_components/Ionicons/css/ionicons.min.css"
      },
      { rel: "stylesheet", href: "/dist/css/AdminLTE.min.css" },
      { rel: "stylesheet", href: "/dist/css/skins/_all-skins.min.css" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic' },
      { rel: 'stylesheet', href: '/dist/css/custom.css' },
    ]
  }
};
</script>

<style>

</style>
