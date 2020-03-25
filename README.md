# VueClaw

A wrapper for Claw.

## demo

[Try it out!](https://seregpie.github.io/VueClaw/)

## dependencies

- [Claw](https://github.com/SeregPie/Claw)

## setup

### npm

```shell
npm i vue-claw
```

### ES module

Register the directive globally.

```javascript
import Vue from 'vue';
import VueClaw from 'vue-claw';

Vue.directive(VueClaw.name, VueClaw);
```

*or*

Register the directive in the scope of a component.

```javascript
import VueClaw from 'vue-claw';

export default {
  directives: {
    [VueClaw.name]: VueClaw,
  },
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@seregpie/claw"></script>
<script src="https://unpkg.com/vue-claw"></script>
```

The directive is globally available as `VueClaw`. If Vue is detected, the directive is registered automatically.

## usage

```vue
<template>
  <div
    v-claw:pan="onPan"
    v-claw:tap="onTap"
  ><!--...--></div>
</template>
<script>
export default {
  methods: {
    onPan(event) {
      // handle pan
    },
    onTap(event) {
      // handle tap
    },
  },
};
</script>
```
