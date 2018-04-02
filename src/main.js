/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Components from './components'
import './app.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  delimiters: ['${', '}']
})
