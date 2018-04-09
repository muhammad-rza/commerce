<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <UserPanel />
            <!-- /Sidebar user panel -->
            <!-- search form -->
            <SearchBar />
            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <MainNavigation />


            <!--{{auth.menu}}-->



            <!-- sidebar menu: : style can be found in sidebar.less -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>

  import UserPanel from "./userPanel.vue";
  import SearchBar from "./searchBar.vue";
  import MainNavigation from "./mainNavigation.vue";


  export default {

    components:{
      UserPanel,
      SearchBar,
      MainNavigation
    }

  }

</script>
