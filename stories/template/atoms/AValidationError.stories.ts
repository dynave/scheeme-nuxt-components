import AValidationError from '@/components/templates/atoms/AValidationError.vue'

export default {
  title: 'Atoms/AValidationError',
  component: AValidationError
}

const Template = (args: any) => ({
  components: { AValidationError },

  setup () {
    return { args }
  },

  template: '<AValidationError v-bind="args">この項目は必須です。</AValidationError>'
})

export const Default = Template.bind({})
