<template>
  <div v-if="modalOpen" ref="dialogRef" :class="$style.wrapper">
    <div :class="[$style.content, $style[type]]">
      <p :class="$style.title">{{ title }}</p>
      <p :class="$style.text">{{ text }}</p>
      <div v-if="input">
        <a-input v-model="inputValue" :class="$style.input" :type="input.type" :placeholder="placeholder" />
      </div>
      <div :class="$style.buttonBox">
        <button :class="$style.buttonConfirm" @click="confirm(inputValue), close()">{{ confirmText }}</button>
        <button :class="$style.buttonCancel" @click="close()">{{ cancelText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from '@nuxtjs/composition-api'

type Props = 'active' | 'title' | 'text' | 'input' | 'type' | 'confirm' | 'confirmText' | 'cancelText' | 'placeholder'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: null
    },

    confirmText: {
      type: String,
      default: 'OK'
    },

    confirm: {
      type: Function,
      default: () => {}
    },

    cancelText: {
      type: String,
      default: 'キャンセル'
    },

    type: {
      type: String,
      default: 'primary'
    },

    input: {
      type: Object,
      default: null
    }
  },

  setup (props, context) {
    // const active = ref(false)
    // const cont = useContext()

    const dialogRef = ref<Element>()
    const inputValue = ref<string | number>()
    const modalOpen = ref(false)

    onMounted(() => {
      // console.log('open')
      modalOpen.value = true
      // active.value = true
      // if (!document.body.contains(context.root.$el)) {
      //   document.body.appendChild(context.root.$el)
      // }
    })

    onBeforeUnmount(() => {
      console.log(context.root.$el, dialogRef.value)
      // active.value = false
      // document.body.removeChild(context.root.$el)
      // document.body.removeChild(dialogRef.value!)
    })

    const open = () => {
      console.log('open')
      modalOpen.value = true
    }

    // const confirmFunction = () => {
    //   modalOpen.value = false
    // }

    const close = () => {
      console.log('close')
      modalOpen.value = false
      // setTimeout(() => {
      //   if (document.body.contains(this.$el)) document.body.removeChild(this.$el);
      //   this.$destroy();
      // }, 200);
    }

    return {
      // active,
      modalOpen,
      dialogRef,
      inputValue,
      // confirmFunction,
      close
    }
  }

  // data () {
  //   return {
  //     active: false,
  //     title: '',
  //     text: '',
  //     input: null,
  //     type: 'primary',
  //     confirm: undefined,
  //     confirmText: 'OK',
  //     cancelText: 'キャンセル',
  //     placeholder: ''
  //   }
  // }

  // methods: {
  //   open (props: { [key] : string}) {
  //     this.active = true

  //     if (props.title) {

  //     }

  //     Object.keys(props).forEach((key : Props) => {
  //       if (props[key]) {

  //       }
  //     })

  //     this.$forceUpdate()
  //     this.$mount()
  //   },

  //   close () {
  //     this.active = false
  //   }
  // }
})
</script>

<style lang="scss" module>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(#000, 0.2);
}

.content {
  width: 95vw;
  max-width: 500px;
  padding: 60px 30px 30px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 6px 10px rgba(0, 0, 0, 0.06);
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
}

.text {
  margin-top: 30px;
  line-height: 1.4;
  color: #777;
  white-space: pre-wrap;
}

.buttonBox {
  margin-top: 30px;
}

%button {
  width: 100%;
  max-width: 375px;
  padding: 20px;
  font-weight: 700;
}

.input {
  max-width: 375px;
  margin-top: 30px;
}

.buttonConfirm {
  @extend %button;

  color: #fff;
  text-align: center;
  background-color: #ff9927;
  border-radius: 10px;

  &:hover {
    background-color: #cc7e24;
  }

  .danger & {
    background-color: #f62d75;

    &:hover {
      background-color: #e0165d;
    }
  }
}

.buttonCancel {
  @extend %button;

  margin-top: 10px;
  color: #000;
  border-radius: 10px;

  &:hover {
    background-color: #f7f7f7;
  }
}
</style>
