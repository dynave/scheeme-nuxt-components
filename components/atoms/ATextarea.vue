<template>
  <textarea
    v-if="editable"
    v-model="valueSync"

    :class="[$style.input, $style[size], { [$style.outline]: outline }]"
    :autocomplete="autocomplete"
    :inputmode="inputmode"
    :maxlength="maxlength"
    :rows="rows"
    :cols="cols"
    :disabled="disabled"
    :style="updateHeight"

    @blur="$emit('blur')"
  />

  <span
    v-else
    :class="[$style.input, $style[size], { [$style.outline]: outline }]"
  >
    {{ valueSync }}
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: ''
    },

    autocomplete: {
      type: String,
      default: ''
    },

    inputmode: {
      type: String,
      default: 'text'
    },

    maxlength: {
      type: String,
      default: ''
    },

    outline: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: 'medium'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    editable: {
      type: Boolean,
      default: true
    },

    height: {
      type: String,
      default: 'auto'
    },

    rows: {
      type: [String, Number],
      default: 3
    },

    cols: {
      type: Number,
      default: null
    }
  },

  setup (props, context) {
    const valueSync = computed({
      get: () => props.value,
      set: value => context.emit('input', value)
    })

    const updateHeight = computed(() => {
      if (props.height === 'auto') {
        return 'height: auto;'
      }
      return `height: ${props.height}px`
    })

    return {
      valueSync,
      updateHeight
    }
  }
})
</script>

<style lang="scss" module>
.input {
  width: 100%;
  padding: 11px 10px;
  line-height: 1.5;
  background-color: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 5px;

  &.small {
    padding: 9px 30px 9px 12px;
    font-size: 0.875rem;
  }

  &.large {
    padding: 17px;
    font-size: 1.125rem;
  }

  &:focus,
  &:active {
    background-color: #fff;
    border-color: #dbdbdb;
    outline: none;
  }

  &.outline {
    background-color: #fff;
    border-color: #e6e6e6;
  }

  &:disabled {
    color: #ccc;
    background-color: rgba(#000, 0.2);
    border-color: #ccc;
  }

  &::placeholder {
    color: #999;
  }
}
</style>
