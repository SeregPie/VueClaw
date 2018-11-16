# VueClaw

A wrapper for Claw.

## demo

[Try it out!](https://seregpie.github.io/VueClaw/)

## dependencies

- [Claw](https://github.com/SeregPie/Claw)

## setup

### npm

```shell
npm install vueclaw
```

### ES module

Register the directive globally.

```javascript
import Vue from 'vue';
import VueClaw from 'vueclaw';

Vue.directive(VueClaw.name, VueClaw);
```

*or*

Register the directive in the scope of a component.

```javascript
import VueClaw from 'vueclaw';

export default {
  directives: {
    [VueClaw.name]: VueClaw,
  },
  /*...*/
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@seregpie/claw"></script>
<script src="https://unpkg.com/vueclaw"></script>
```

If Vue is detected, the directive will be registered automatically.
