import Vuex from 'vuex';

import values from './values';
import fields from './fields';
import templates from './templates';
import categories from './categories';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules:{
      values,
      fields,
      templates,
      categories,
    },
  })
}

export default createStore
