import { FormatInput } from '../dist/es.js';

new Vue({
  el: '#app',
  directives: {
    demo: FormatInput,
  },
  data() {
    return {
      value: undefined,
    };
  },
});
