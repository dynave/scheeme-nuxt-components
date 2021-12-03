<template>
  <div :class="$style.breadcrumb">
    <nuxt-link :to="homeLink">{{ homeName }}</nuxt-link>

    <span v-for="page of pages" :key="page.pageName">
      <span :class="[$style.arrow, 'iconChevronRight']" />

      <nuxt-link :to="page.link">{{ page.pageName }}</nuxt-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

interface Pages {
  link: string,
  pageName: string
}

export default defineComponent({
  props: {
    homeName: {
      type: String,
      default: 'ダッシュボード'
    },

    homeLink: {
      type: String,
      default: '/dashboard/'
    },

    pages: {
      type: Array as PropType<Pages[]>,
      default: () => []
    }
  }
})
</script>

<style lang="scss" module>
.breadcrumb {
  font-size: 12px;
  color: #838383;
}

.arrow {
  margin: 0 2px;
  font-size: 10px;
}
</style>
