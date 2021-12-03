<template>
  <span :class="$style.tooltip" @mouseover="active = true" @mouseleave="active = false">
    <span v-show="active" :class="$style.text">{{ text }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    }
  },

  setup () {
    const active = ref(false)

    return {
      active
    }
  }
})
</script>

<style lang="scss" module>
.tooltip {
  position: relative;
  display: inline-block;

  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
    text-align: center;
    content: "?";
    background-color: #707070;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  .text {
    position: fixed;
    top: 50vh;
    left: 18px;
    width: calc(100% - 36px);
    padding: 18px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: left;
    white-space: pre-line;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 7px 5px rgba(0, 0, 0, 0.16);
    transform: translateY(-50%);

    @media (min-width: 1024px) {
      position: absolute;
      top: 40px;
      left: -12px;
      z-index: 5;
      width: 50vw;
      min-width: 300px;
      max-width: 500px;
      transform: none;
    }

    &::before {
      @media (min-width: 1024px) {
        position: absolute;
        top: -10px;
        left: 10px;
        width: 0;
        height: 0;
        content: "";
        border-color: transparent transparent rgba(0, 0, 0, 0.8) transparent;
        border-style: solid;
        border-width: 0 10px 10px 10px;
      }
    }
  }
}
</style>
