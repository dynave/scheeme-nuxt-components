import MDatepicker from '@/components/molecules/MDatepicker.vue'

export default {
  title: 'Molecules/MDatepicker',
  component: MDatepicker
}

const Template = (args: any) => ({
  setup () {
    return {
      args: {
        ...args,
        label: '生年月日'
      }
    }
  },

  template: '<MDatepicker v-bind="args"></MDatepicker>',
  parameters: {}
})

export const Default = Template.bind({})
