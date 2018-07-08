// import _ from 'lodash';
// import './static/css/style.css';
// import printMe from './static/js/print.js';

// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');
//   btn.innerText = 'click me';
//   btn.onclick = printMe;

//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack',''], ' ');
//   element.classList.add('hello');

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

// if (module.hot) {
//   module.hot.accept('./static/js/print.js', function () {
//     console.log('接收到热模块加载的信号了，要开始刷新了!');
//     printMe();
//   })
// }

import Vue from 'vue';
import App from './App.vue';
import './static/css/reset.css';

new Vue({
  el: '#app',
  render: h=>h(App)
});
