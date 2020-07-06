/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ragList: [],
        selectUid: 0,
    },
    mutations: {
        updateRagList(state, ragList) {
            state.ragList = ragList || [];
        },
        setSelectUid(state, uid) {
            state.selectUid = uid;
        },
    },
    actions: {
        updateRagList({ commit }, ragList) {
            commit('updateRagList', ragList);
        },
        setSelectUid({ commit }, uid) {
            commit('setSelectUid', uid);
        },
    },
    modules: {
    },
});
