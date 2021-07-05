import createPersistedState from 'vuex-persistedstate'
// import Vue from "vue"
export default ({ store }) => {
    createPersistedState({
        storage: sessionStorage,
    })(store)
    // Vue.prototype.$store = store
}
