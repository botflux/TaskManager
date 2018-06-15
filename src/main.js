import Vue from 'vue'
import App from './App.vue'

import $ from 'jquery'

$(document).ready(function () {
    $('[data-toggle="popover"]').popover()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
