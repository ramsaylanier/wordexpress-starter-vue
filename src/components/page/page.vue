<template>
  <component v-if="!isLoading" :is="getLayout()" :page="post"/>
</template>

<script>
import PageQuery from '@/graphql/page.gql'
import Layouts from './layouts/layouts'
export default {
  name: 'page',
  props: ['name'],
  data () {
    return {
      post: {},
      isLoading: 0
    }
  },
  watch: {
    '$route.params.name': function (name) {
      this.$apollo.queries.post.refetch({name: name})
    }
  },
  apollo: {
    post () {
      return {
        query: PageQuery,
        loadingKey: 'isLoading',
        prefetch: ({route, name}) => {
          return {
            name: route.params.name || name
          }
        },
        variables: {
          name: this.$route.params.name || this.name
        }
      }
    }
  },
  methods: {
    getLayout: function () {
      const layout = this.post.layout ? this.post.layout.meta_value : 'DefaultPage'
      return Layouts[layout]
    }
  }
}
</script>