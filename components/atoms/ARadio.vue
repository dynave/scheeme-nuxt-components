<template>
  <span :class="[$style[size], $style.input]">
    <input
      :id="name + value"

      v-model="input"
      :class="[$style.radio]"
      :value="value"
      :checked="value === checked"
      :name="name"
      type="radio"
      :disabled="disabled"
    >

    <label :class="$style.label" :for="name + value"><slot /></label>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  model: {
    prop: 'checked',
    event: 'change'
  },

  props: {
    checked: {
      type: [String, Boolean],
      required: true
    },

    value: {
      type: [String, Boolean],
      required: true
    },

    name: {
      type: String,
      default: 'radio'
    },

    size: {
      type: String,
      default: 'medium'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup (props, context) {
    const input = computed({
      get: () => props.checked,
      set: checked => context.emit('change', checked)
    })

    return {
      input
    }
  }
})
</script>

<style lang="scss" module>
.small {
  font-size: 0.875rem;
}

.large {
  font-size: 1.125rem;
}

.radio {
  display: none;

  + .label {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;

    &::before {
      display: inline-block;
      width: 1.25em;
      height: 1.25em;
      margin-right: 0.375em;
      vertical-align: -23%;
      content: "";
      border: 2px solid #dbdbdb;
      border-radius: 50%;
    }
  }

  &:checked {
    + .label {
      &::before {
        border: 2px solid #0058fd;
      }

      &::after {
        position: absolute;
        top: 50%;
        left: calc(0.25em + 1px);
        display: block;
        width: 0.625em;
        height: 0.625em;
        content: "";
        background-color: #0058fd;
        border-radius: 50%;
        transform: translate(0%, -50%);
      }
    }
  }
}
</style>
