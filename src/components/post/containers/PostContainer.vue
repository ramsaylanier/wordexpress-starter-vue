<template>
  <post-single :post="post"/>
</template>

<script>
import PostQuery from '@/graphql/post.gql'
import PostSingle from '../PostSingle'

export default {
  name: 'posts-container',
  data () {
    return {
      post: {}
    }
  },
  apollo: {
    post: {
      query: PostQuery,
      prefetch ({route}) {
        return {
          name: route.params.postname
        }
      },
      variables () {
        return {
          name: this.$route.params.postname
        }
      }
    }
  },
  components: {
    PostSingle
  }
}
</script>