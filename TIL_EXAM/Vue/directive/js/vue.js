
(function(global, Vue){
  'use strict';

  if(!Vue) { throw 'Vue가 설치되어있지 않습니다.'; }

  global.data = 0;

  Vue.directive('square', {
    bind: function(el, binding) {
      // 엘리먼트가 바인딩될 때 예비 작업들을 한다.
      el.innerHTML = Math.pow(binding.value, 2);
    },
    update: function (newValue, oldValue) {
      // 갱신된 값으로 어떤 작업을 수행한다.
      console.log(arguments);
    }
  });

  global.data = 6;

  new Vue({
    el: '#app',
    data: function() {
      return {
        text: 'Hello World',
        item: global.data
      }
    }
  })

  global.data = 7;

}(window, window.Vue));