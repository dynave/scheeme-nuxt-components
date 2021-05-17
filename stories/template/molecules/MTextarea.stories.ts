import MTextarea from '@/components/templates/molecules/MTextarea.vue'

export default {
  title: 'Molecules/MTextarea',
  component: MTextarea
}

const Template = (args: any) => ({
  setup () {
    return { args }
  },
  template: '<MTextarea v-bind="args"></MTextarea>'
})

export const Default = Template.bind({})
