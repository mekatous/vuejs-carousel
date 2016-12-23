import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {state} from "./states";
import {getters} from "./getters";
import {mutations} from "./mutations";

/**
 * Carousel main store
 *
 * We are using the Vuex store system because
 * it easier to keep track of what's happening
 * between the Photo Gallery and the Theater
 *
 * @type {Store}
 */
export const store = new Vuex.Store({
    state,
    getters,
    mutations,
});
