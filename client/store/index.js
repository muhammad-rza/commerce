import Vuex from 'vuex';

import values from './values';
import fields from './fields';
import templates from './templates';
import categories from './categories';
import brands from './brands';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules:{
      values,
      fields,
      templates,
      categories,
      brands
    },
  })
}

export default createStore
