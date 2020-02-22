import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.directive('highlight', {
  bind(el, binding) {
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
        el.style.color = ''
      }
      else {
        el.style.color = binding.value;
        el.style.backgroundColor = ''
      }
    }, delay)
  }
});

Vue.directive('my-on', {
  bind(el, binding){
    el.addEventListener(binding.arg.toString(), binding.value)
  }
});

Vue.filter('append-length', (value) => {
  return value + ' (' + value.length + ')'
});

new Vue({
  render: h => h(App),
}).$mount('#app');
