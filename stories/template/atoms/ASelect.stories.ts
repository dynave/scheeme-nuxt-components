import ASelect from '@/components/atoms/ASelect.vue'

export default {
  title: 'Atoms/ASelect',
  component: ASelect
}

const Template = (args: any) => ({
  setup () {
    return { args }
  },

  template:
    '<ASelect v-bind="args"><option value="value0">value0</option></ASelect>'
})

export const Default = Template.bind({})
