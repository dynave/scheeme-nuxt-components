<template>
  <input
    v-model="input"
    :class="[$style.input, {[$style.outline]: outline}]"
    :type="type"
    :autocomplete="autocomplete"
    :inputmode="inputmode"
    :maxlength="maxlength"
    :disabled="disabled"
    :pattern="pattern"

    @blur="$emit('blur', $event), $event.target.value = validation($event.target.value);"
  >
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: ''
    },

    type: {
      type: String,
      default: 'text'
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

    disabled: {
      type: Boolean,
      default: false
    },

    pattern: {
      type: String,
      default: ''
    }
  },

  setup (props, context) {
    const input = computed({
      get: () => props.value,

      set: (value) => {
        if (props.type === 'number' && props.value !== null) {
          value = Number(value)
        }
        if (props.maxlength) {
          if (String(value).length > Number(props.maxlength)) {
            value = String(value).slice(0, Number(props.maxlength))
          }
        }

        context.emit('input', value)
      }
    })

    const validation = (value: string) => {
      if (props.type === 'number') {
        value = value.replace(/\D!./g, '')
      } else if (props.type === 'tel') {
        value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
          return String.fromCharCode(
            s.charCodeAt(0) - 65248
          )
        })
      }

      return value
    }

    return {
      input,
      validation
    }
  }
})
</script>

<style lang="scss" module>
.input {
  width: 100%;
  padding: 11px 10px;
  background-color: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 3px;

  &:focus,
  &:active {
    background-color: transparent;
    border-color: #dbdbdb;
    outline: none;
  }

  &.outline {
    background-color: #fff;
    border-color: #d6d1cc;
  }

  &:disabled {
    background-color: rgba(#000, 0.2);
  }

  &::placeholder {
    color: #999;
  }
}
</style>
