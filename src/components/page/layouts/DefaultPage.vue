<template>
  <div>
    <div v-html="parseContent(page.post_content)"/>
  </div>
</template>

<script>
import parseContent from '@/helpers/parseContent'
export default {
  name: 'default-page',
  props: ['page'],
  methods: {
    parseContent
  }
}
</script>

<style>

</style>
