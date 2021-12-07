import MSelect from '@/components/molecules/MSelect.vue'

export default {
  title: 'Molecules/MSelect',
  component: MSelect
}

const Template = (args: any) => ({
  setup () {
    return { args }
  },

  template: '<MSelect v-bind="args"></MSelect>'
})

export const Default = Template.bind({})
