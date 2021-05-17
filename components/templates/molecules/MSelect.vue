<template>
  <span v-if="decided" :class="$style.labelBox">
    <span v-if="label" :class="$style.decidedLabel">{{ label }}</span>
    <span :class="$style.decidedValue">{{ input }}</span>
  </span>

  <label v-else :class="$style.labelBox">
    <span v-if="label || tooltip" :class="$style.label">
      <span>{{ label }}</span>
      <a-tooltip v-if="tooltip" :class="$style.tooltip" :text="tooltip" />
    </span>

    <span :class="$style.inputBox">
      <span v-if="prefix" :class="$style.prefix">{{ prefix }}</span>

      <a-select
        v-model="input"
        :class="$style.select"
        :size="size"
        :disabled="disabled"
        :placeholder="placeholder"
        @change="$emit('change', $event)"
      >
        <template v-for="(item, index) in names">
          <!-- NOTE: valueとtextが異なる場合 -->
          <option v-if="item.value || item.text" :key="item.value" :value="item.value">{{ item.text }}</option>
          <!-- NOTE: labelとvaluesがある場合、optgroup -->
          <optgroup v-else-if="item.label && item.values" :key="item.label" :label="item.label">
            <option v-for="value in item.values" :key="value" :value="value">{{ value }}</option>
          </optgroup>
          <!-- NOTE: valueとtextが同一の場合 -->
          <option v-else :key="index" :value="item">{{ item }}</option>
        </template>
      </a-select>

      <span v-if="suffix" :class="$style.suffix">{{ suffix }}</span>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: [String, Number, Object],
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

    names: {
      type: Array,
      required: true
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

    decided: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: '選択してください'
    },

    tooltip: {
      type: String,
      default: ''
    }
  },

  setup (props, context) {
    const input = computed({
      get: () => props.value,
      set: (value) => { context.emit('input', value) }
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
    display: block;
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
  }

  .select {
    width: 100%;
  }

  .suffix {
    margin-left: 0.3em;
  }

  .icon {
    font-style: normal;
  }
</style>
