import Vue from 'vue';
import { FormatInput } from '../../src/index';

describe('init', () => {
  let vm;
  beforeAll(done => {
    vm = new Vue({
      template: `<div class="app"><input data-test="input" type="text" v-model="value" v-format-input="{min: 1, max: 10, precision: 2}"/></div>`,
      directives: {
        'format-input': FormatInput,
      },
      data() {
        return {
          value: '',
        };
      },
    }).$mount();
    done();
  });
  it('Create directive', () => {
    expect(typeof vm.$options.directives['format-input']).toEqual('object');
  });

  it('demo', () => {
    const input = vm.$el.querySelector('input');
    const rand = Math.random() * 10;
    input.dispatchEvent(new window.Event('focus'));
    input.value = rand;
    input.dispatchEvent(new window.Event('focusout'));
    expect(vm.value).toEqual(rand.toFixed(2));
  });

  afterEach(done => {
    vm.$destroy(true);
    done();
  });
});
