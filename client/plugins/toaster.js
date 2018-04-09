// This code will be injected before initializing the root App
import Vue from 'vue';
// register the plugin on vue
import Toasted from 'vue-toasted';


 let Options = {
   duration:2000
 }



// options to the toast
// you can also pass options, check options reference below
Vue.use(Toasted, Options)
