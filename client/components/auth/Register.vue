<template>

    <div class="hold-transition login-page">

        <div class="login-box">
            <div class="login-logo">
                <a href="#"><b>Admin</b>LTE</a>
            </div>
            <!-- /.login-logo -->
            <div class="login-box-body">
                <!--<p class="login-box-msg">Sign in to start your session</p>-->

                <form @submit.prevent="register()">
                    <div class="form-group has-feedback">
                        <input type="email" class="form-control" placeholder="Email"  v-model="form.email" >
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="Name"  v-model="form.name" >
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="Last name"  v-model="form.last_name" >
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="Phone"  v-model="form.phone" >
                        <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                    </div>

                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="Password"  v-model="form.password" >
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div class="col-xs-12">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign Up</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
            <!-- /.login-box-body -->
        </div>
    </div>
</template>

<script>
  /* eslint-disable */
  export default {

    data:()=>({

      form:{}

    }),
    methods:{

      register() {

        this.$store.dispatch('user/create' , {user:this.form , vue:this});

      }

    }
  };
</script>


<style>
    html , body {
        background: #d2d6de;
    }

    body {
        height: 100vh!important;
        overflow: hidden;
    }
</style>
