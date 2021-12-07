import MBreadcrumbs from '@/components/molecules/MBreadcrumbs.vue'

export default {
  title: 'Molecules/MBreadcrumbs',
  component: MBreadcrumbs
}

const Template = (args: any) => ({
  setup () {
    return {
      args: {
        ...args
      }
    }
  },

  template: '<m-breadcrumbs v-bind="args"></m-breadcrumbs>',
  parameters: {}
})

export const Default = Template.bind({})
