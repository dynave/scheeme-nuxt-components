import { Plugin } from '@nuxt/types'
import Vue, { VueConstructor } from 'vue'
import dialogComponent from '@/components/programmatic/PDialog.vue'
import toastComponent from '@/components/programmatic/PToast.vue'

const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue
const ComponentClass = vm.extend(toastComponent)
const DialogClass = vm.extend(dialogComponent)

const component = {
  toast: new ComponentClass()
}

const registerComponent = (Extend: VueConstructor) => (props: any) => {
  const instance = new Extend({
    propsData: props
  })
    .$mount()
  document.body.appendChild(instance.$el)
}

const plugin : Plugin = (_context, inject) => {
  inject('component', component)
  inject('dialog', registerComponent(DialogClass))
}

export default plugin
