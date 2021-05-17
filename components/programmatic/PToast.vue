<template>
  <transition>
    <div v-if="show" :class="[$style.wrapper, $style[type]]">
      <div :class="$style.text">{{ text }}</div>
      <div :class="$style.close" @click="close()">×</div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

interface Open {
  text: string,
  type: string,
}

export default Vue.extend({
  data () {
    return {
      show: false,
      type: 'primary',
      text: ''
    }
  },

  beforeMount () {
    if (typeof window !== 'undefined') {
      this.$nextTick(() => {
        document.body.appendChild(this.$el)
      })
    }
  },

  mounted () {
    this.show = true
    document.body.appendChild(this.$el)
  },

  destroyed () {
    this.$data.text = ''
    this.$data.type = 'primary'
  },

  methods: {
    open ({ text, type } : Open) {
      if (text) {
        this.$data.text = text
      }

      if (type) {
        this.$data.type = type
      }

      this.$mount()

      setTimeout(() => {
        this.show = false
      }, 2000)

      setTimeout(() => {
        if (document.body.contains(this.$el)) {
          const el = this.$el

          if (typeof el.remove !== 'undefined') {
            el.remove()
          } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
            el.parentNode.removeChild(el)
          }

          this.$destroy()
        }
      }, 3000)
    },

    close () {
      this.show = false

      setTimeout(() => {
        if (document.body.contains(this.$el)) {
          document.body.removeChild(this.$el)
        }

        this.$destroy()
      }, 200)
    }
  }
})
</script>

<style lang="scss" scoped>
.v-enter-active {
  transition: opacity 0.2s;
}

.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" module>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    color: #fff;
    background-color: #2dc99c;

    &.danger {
      background-color: #ff2c75;
    }
  }

  .text {
    padding: 18px;
    font-size: 18px;
    text-align: center;
  }

  .close {
    position: absolute;
    top: 17%;
    right: 1%;
    font-size: 30px;

    &:hover {
      cursor: pointer;
    }
  }
</style>
