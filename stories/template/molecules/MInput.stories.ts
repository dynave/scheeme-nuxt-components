import MInput from '@/components/templates/molecules/MInput.vue'

export default {
  title: 'Molecules/MInput',
  component: MInput
}

const Template = (args: any) => ({
  setup () {
    return { args }
  },
  template: '<MInput v-bind="args"></MInput>'
})

export const Default = Template.bind({})
