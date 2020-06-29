/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('Dashboard', require('./components/Dashboard.vue').default);
// Vue.component('Project', require('./components/Project.vue').default);
// Vue.component('Developer', require('./components/Developer.vue').default);

const routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/projects', component: require('./components/Project.vue').default },
    { path: '/developers', component: require('./components/Developer.vue').default }
  ]

  const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes // short for `routes: routes`
  })

const app = new Vue({
    router
  }).$mount('#app')
