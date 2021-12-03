<template>
  <span v-if="!editable" :class="$style.labelBox">
    <span v-if="label" :class="$style.decidedLabel">{{ label }}</span>
    <span :class="$style.decidedValue">{{ input }}</span>
  </span>

  <label v-else :class="$style.labelBox">
    <span v-if="label" :class="$style.label">
      <span :class="{[$style.labelText]: textBold}">{{ label }}</span>
      <a-tooltip v-if="tooltip" :class="$style.tooltip" :text="tooltip" />
    </span>

    <span :class="$style.inputBox">
      <span v-if="prefix" :class="$style.prefix">{{ prefix }}</span>

      <a-input
        v-model="input"
        :type="type"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :inputmode="inputmode"
        :outline="outline"
        :size="size"
        :disabled="disabled"
        :step="step"
        :min="min"
        :max="max"
        @blur="$emit('blur', $event)"
      />

      <span v-if="suffix" :class="$style.suffix">{{ suffix }}</span>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    required: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'text'
    },

    outline: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: ''
    },

    maxlength: {
      type: String,
      default: ''
    },

    inputmode: {
      type: String,
      default: ''
    },

    autocomplete: {
      type: String,
      default: ''
    },

    textBold: {
      type: Boolean,
      default: false
    },

    prefix: {
      type: String,
      default: ''
    },

    suffix: {
      type: String,
      default: ''
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

    step: {
      type: [String, Number],
      default: 1
    },

    min: {
      type: [String, Number],
      default: null
    },

    max: {
      type: [String, Number],
      default: null
    },

    tooltip: {
      type: String,
      default: ''
    }
  },

  setup (props, context) {
    const input = computed({
      get: () => props.value,
      set: value => context.emit('input', value)
    })

    return {
      input
    }
  }
})
</script>

<style lang="scss" module>
  .decidedLabel {
    display: block;
  }

  .decidedValue {
    display: inline-block;
    width: 100%;
    padding: 13px 0;
    border-bottom: 1px solid #e6e6e6;

    &:not(:only-child) {
      margin-top: 9px;
    }
  }

  .labelBox {
    display: inline-block;
    width: 100%;
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
    display: flex;
    align-items: flex-end;

    &:not(:only-child) {
      margin-top: 9px;
    }
  }

  .prefix {
    margin-right: 0.3em;
    white-space: nowrap;
  }

  .suffix {
    margin-left: 0.3em;
    white-space: nowrap;
  }
</style>
