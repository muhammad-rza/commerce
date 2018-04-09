<template>

    <div class="hold-transition login-page">

        <div class="login-box">
            <div class="login-logo">
                <a href="#"><b>Admin</b>LTE</a>
            </div>
            <!-- /.login-logo -->
            <div class="login-box-body">
                <!--<p class="login-box-msg">Sign in to start your session</p>-->

                <form @submit.prevent="login()">

                    <!--{{$store.getters['auth/getErrors'] }}-->

                    <div class="form-group has-feedback">
                        <input type="email" class="form-control" placeholder="Email"  v-model="form.email" >
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="Password"  v-model="form.password" >
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div class="col-xs-12">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                        </div>
                        <!-- /.col -->

                        <!-- /.col -->
                        <!--<div class="col-xs-12">-->
                            <!--<router-link  to="/2GxurkT2zx/" class="btn btn-primary btn-block btn-flat" >-->
                                <!--go index-->
                            <!--</router-link>-->
                        <!--</div>-->
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

            form:{
                email:'',
                password:'',
            },


        }),
        methods:{

            login() {

                this.$store.dispatch('auth/login' , {form:this.form ,vue:this });

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
