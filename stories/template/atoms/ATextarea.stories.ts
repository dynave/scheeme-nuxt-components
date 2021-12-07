import ATextarea from '@/components/atoms/ATextarea.vue'

export default {
  title: 'Atoms/ATextarea',
  component: ATextarea
}

const Template = (args: any) => ({
  setup () {
    return { args }
  },

  template: '<ATextarea v-bind="args"></ATextarea>'
})

export const Default = Template.bind({})
