<template>
  <div>
    <div :class="$style.labelBox">
      <span v-if="label" :class="$style.label">
        <span :class="{[$style.labelText]: textBold }">{{ label }}</span>
        <span v-if="required" :class="$style.required">必須</span>
        <a-tooltip v-if="tooltip" :class="$style.tooltip" :text="tooltip" />
      </span>

      <div :class="$style.inputBox">
        <a-datepicker
          v-model="valueSync"
          :class="$style.datepicker"
          :range="range"
          :format="format"
          :clearable="clearable"
          :type="type"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: [Date, Array],
      default: null
    },

    type: {
      type: String,
      default: 'date'
    },

    textBold: {
      type: Boolean,
      default: false
    },

    format: {
      type: String,
      default: 'YYYY年MM月DD日'
    },

    range: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: ''
    },

    required: {
      type: Boolean,
      default: false
    },

    clearable: {
      type: Boolean,
      default: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    tooltip: {
      type: String,
      default: ''
    }
  },

  setup (props, context) {
    const valueSync = computed({
      get: () => props.value,
      set: value => context.emit('input', value)
    })

    return {
      valueSync
    }
  }
})
</script>

<style lang="scss" module>
.labelBox {
  display: inline-block;
  width: 100%;
  border: none;
}

.label {
  white-space: nowrap;
}

.labelText {
  font-weight: 700;
}

.tooltip {
  margin-left: 5px;
  vertical-align: 5%;
}

.required {
  font-size: 0.75rem;
  color: #ff3860;

  &:not(:only-child) {
    margin-left: 0.4em;
  }
}

.inputBox {
  &:not(:only-child) {
    margin-top: 9px;
  }
}

.icon {
  font-style: normal;
}
</style>
