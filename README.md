# vue-format-input

## install

```shell
npm install -D vue-format-input
```

## Usage

```vue
<template>
  <div calss="">
    <input
      type="text"
      v-model="value"
      v-demo="{ min: 1, max: 10, precision: 2 }"
    />
  </div>
</template>
<script>
import { FormatInput } from 'vue-format-input;

export default {
  directives: {
    'format-input': FormatInput,
  },
  data() {
    return {
      value: ''
    },
  },
};
</script>
```

## Options

| option    | type    | default | description |
| --------- | ------- | ------- | ----------- |
| min       | Number  | -       | required    |
| max       | Number  | -       | required    |
| precision | Number  | 0       | -           |
| empty     | Boolean | true    | -           |

## License

MIT
