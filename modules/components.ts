import requireContext from 'require-context'
import Vue, { VueConstructor } from 'vue'

const files = requireContext('../components/templates', true, /\.vue$/)
const components : { [key:string] : VueConstructor } = {}

files.keys().forEach((key: string) => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
