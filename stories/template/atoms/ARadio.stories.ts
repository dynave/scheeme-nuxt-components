import ARadio from '@/components/atoms/ARadio.vue'

export default {
  title: 'Atoms/ARadio',
  component: ARadio
}

const Template = (args: any) => ({
  setup () {
    return { args }
  },

  template: `
    <div>
      <a-radio v-bind="args"></a-radio>
      <a-radio v-bind="args"></a-radio>
    </div>
  `
})

export const Default = Template.bind({})
