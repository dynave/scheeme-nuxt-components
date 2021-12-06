import Vue from 'vue'

// Atoms
import ADatepicker from '@/components/atoms/ADatepicker.vue'
import AInput from '@/components/atoms/AInput.vue'
import ARadio from '@/components/atoms/ARadio.vue'
import ASelect from '@/components/atoms/ASelect.vue'
import ATextarea from '@/components/atoms/ATextarea.vue'
import ATooltip from '@/components/atoms/ATooltip.vue'
import AValidationError from '@/components/atoms/AValidationError.vue'

import MDatepicker from '@/components/molecules/MDatepicker.vue'
import MInput from '@/components/molecules/MInput.vue'
import MSelect from '@/components/molecules/MSelect.vue'
import MTextarea from '@/components/molecules/MTextarea.vue'

// import glob from 'glob'

// glob('../components/**/*.ts', (err, match) => {
//   console.log(err)
//   console.log(match)
// })

Vue.component('ADatepicker', ADatepicker)
Vue.component('AInput', AInput)
Vue.component('ARadio', ARadio)
Vue.component('ASelect', ASelect)
Vue.component('ATextarea', ATextarea)
Vue.component('ATooltip', ATooltip)
Vue.component('AValidationError', AValidationError)

Vue.component('MDatepicker', MDatepicker)
Vue.component('MInput', MInput)
Vue.component('MSelect', MSelect)
Vue.component('MTextarea', MTextarea)
