<template>
  <span :class="[$style.selectBox, $style[size]]">
    <select v-model="input" :class="[$style.select, $style[size], { [$style.placeholder]: (value === null | value === '') }]" :disabled="disabled || !editable" @blur="$emit('blur', $event)">
      <option v-if="placeholder" :value="placeholderValue" selected disabled>{{ placeholder }}</option>
      <slot />
    </select>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: [String, Number, Date, Object],
      default: null
    },

    size: {
      type: String,
      default: 'medium'
    },

    placeholder: {
      type: String,
      default: null
    },

    editable: {
      type: Boolean,
      default: true
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup (props, context) {
    const input = computed({
      get: () => props.value,
      set: value => context.emit('change', value)
    })

    const placeholderValue = computed(() => {
      if (props.value === null || typeof props.value === 'number') {
        return null
      }

      return ''
    })

    return {
      input,
      placeholderValue
    }
  }
})
</script>

<style lang="scss" module>
  .selectBox {
    position: relative;
    display: inline-block;
    width: 100%;
    background-color: #f5f5f5;
    border: 1px solid #e6e6e6;
    border-radius: 3px;

    &.small {
      font-size: 0.875rem;
    }

    &.large {
      font-size: 1.125rem;
    }

    &::after {
      position: absolute;
      top: 1.3em;
      right: 1em;
      width: 0.675em;
      height: 0.675em;
      pointer-events: none;
      content: "";
      border: 3px solid #bcbccb;
      border-top: 0;
      border-right: 0;
      border-radius: 2px;
      transform: rotate(-45deg) translateY(-50%);
      transform-origin: center;
    }
  }

  .select {
    width: 100%;
    padding: 13px 35px 13px 17px;

    &.small {
      padding: 9px 30px 9px 12px;
    }

    &.large {
      padding: 17px 40px 17px 21px;
    }

    &:hover {
      cursor: pointer;
    }

    &:focus,
    &:active {
      background-color: #fff;
      border-color: #dbdbdb;
      outline: none;
    }

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
      background-color: #f3f3f3;
      border-color: #ccc;
    }
  }

  .placeholder {
    color: #999;
  }
</style>
