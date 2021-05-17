import ADatepicker from '@/components/templates/atoms/ADatepicker.vue'

export default {
  title: 'Atoms/ADatepicker',
  component: ADatepicker
}

const Template = (args: any) => ({
  setup () {
    return { args }
  },

  template:
    '<ADatepicker v-bind="args"></ADatepicker>'
})

export const Default = Template.bind({})
