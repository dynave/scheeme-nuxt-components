<template>
  <div>
    <date-picker
      v-model="valueSync"
      v-bind="$props"
      :class="$style.datepicker"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/locale/ja'
import 'vue2-datepicker/index.css'

export default defineComponent({
  components: {
    DatePicker
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: [Date, Array],
      default: null
    },

    type: {
      type: String,
      default: 'date'
    },

    range: {
      type: Boolean,
      default: false
    },

    format: {
      type: String,
      default: 'YYYY年MM月DD日'
    },

    valueType: {
      type: String,
      default: 'date'
    },

    size: {
      type: String,
      default: 'medium'
    },

    clearable: {
      type: Boolean,
      default: true
    },

    placeholder: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    defaultValue: {
      type: Date,
      default: () => new Date()
    }
  },

  setup (props, context) {
    const valueSync = computed({
      get: () => props.value,
      set: value => context.emit('change', value)
    })

    return {
      valueSync
    }
  }
})
</script>

<style lang="scss" module>
.datepicker {
  width: 100%;

  input[class="mx-input"] {
    background-color: #f5f5f5;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-shadow: none;
  }

  &.small {
    input {
      padding: 5px 10px;
    }
  }
}
</style>
