import AInput from '@/components/templates/atoms/AInput.vue'

export default {
  title: 'Atoms/AInput',
  component: AInput
}

const Template = (args: any) => ({
  setup () {
    return {
      args: { ...args }
    }
  },
  template: '<AInput v-bind="args"></AInput>'
})

export const Default = Template.bind({})
