import ATooltip from '@/components/templates/atoms/ATooltip.vue'

export default {
  title: 'Atoms/ATooltip',
  component: ATooltip
}

const Template = (args: any) => ({
  setup () {
    args.text = 'ツールチップのテキストがここに入ります。デフォルトで幅が設定されています。\n改行文字である\\nを使うことにより、改行が可能です。'
    return { args }
  },

  template: '<ATooltip v-bind="args"></ATooltip>'
})

export const Default = Template.bind({})
