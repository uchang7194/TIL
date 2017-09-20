// import VueMathPlugin from './plugin/index.js';
// const VueMathPlugin = require("./plugin/index.js");

(function(global, Vue){
  'use strict';
  const VueMathPlugin = {
    install: function(Vue) {
      Vue.directive('square', function(el, binding) {
        el.innerHTML = Math.pow(binding.value, 2);
      });
      Vue.directive('sqrt', function(el, binding) {
        el.innerHTML = Math.sqrt(binding.value);
      });
    }
  }

  Vue.use(VueMathPlugin);

  new Vue({
    el: '#app',
    data: function() {
      return {
        item: 5
      }
    }
  });

}(window, window.Vue));