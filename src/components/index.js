import nemoModal from './nemoModal.vue';
const Modal = {
  install(Vue, options) {
    Vue.component(nemoModal.name,nemoModal)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Modal);
}

export default Modal;