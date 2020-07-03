/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ragList: [],
    },
    mutations: {
        updateRagList(state, ragList) {
            state.ragList = ragList || [];
        },
    },
    actions: {
        updateRagList({ commit }, ragList) {
            commit('updateRagList', ragList);
        },
    },
    modules: {
    },
});
