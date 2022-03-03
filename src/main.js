// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueResource from 'vue-resource';
import vueScrollReveal from 'vue-scroll-reveal'
import  ScrollAnimation  from './scrollAnimation'

Vue.use(VueMaterial);
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(vueScrollReveal , {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '20px',
  mobile: false,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  delay: 500,
});
//scroll
Vue.directive('scrollAnimation' , ScrollAnimation);//global directives


Vue.http.options.root = 'https://domnoo-53917-default-rtdb.firebaseio.com/'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
