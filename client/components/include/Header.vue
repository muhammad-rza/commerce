<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <!--<span class="logo-mini"><b>A</b>LT</span>-->
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <!--  -->
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="/dist/img/av1_1.png" class="user-image" alt="User Image">
              <!--<span class="hidden-xs">{{ $store.getters['auth/auth'].name }}</span>-->
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="/dist/img/av1_1.png" class="img-circle" alt="User Image">
                <p>
                  <!--{{ $store.getters['auth/auth'].name }} {{ $store.getters['auth/auth'].last_name }}-->

                  <!--<a href="#"><i class="fa fa-circle text-success"></i> </a>-->
                  <!--<small>{{ $store.getters['auth/auth'].created_at }} </small>-->
                </p>
              </li>
              <!-- Menu Body -->
              <!--<li class="user-body">-->
              <!--<div class="row">-->
              <!--<div class="col-xs-4 text-center">-->
              <!--<a href="#">Followers</a>-->
              <!--</div>-->
              <!--<div class="col-xs-4 text-center">-->
              <!--<a href="#">Sales</a>-->
              <!--</div>-->
              <!--<div class="col-xs-4 text-center">-->
              <!--<a href="#">Friends</a>-->
              <!--</div>-->
              <!--</div>-->
              <!--&lt;!&ndash; /.row &ndash;&gt;-->
              <!--</li>-->
              <!-- Menu Footer-->
              <li class="user-footer">
                <!--<div class="pull-left">-->
                <!--<a href="#" class="btn btn-default btn-flat">Profile</a>-->
                <!--</div>-->
                <div class="pull-right">
                  <!--<a href="#" @click="$store.dispatch('auth/logout')" class="btn btn-default btn-flat">Sign out</a>-->
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <!--<li>-->
          <!--<a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>-->
          <!--</li>-->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {

  }
</script>
