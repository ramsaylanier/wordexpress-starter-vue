<template>
  <div>
    <slot :posts="posts" :isLoading="isLoading">
    </slot>
  </div>
</template>

<script>
import PostsQuery from '@/graphql/posts.gql'

export default {
  name: 'posts-container',
  props: ['postType', 'limit', 'skip', 'order'],
  data () {
    return {
      posts: [],
      isLoading: 0
    }
  },
  apollo: {
    posts () {
      return {
        query: PostsQuery,
        loadingKey: 'isLoading',
        variables: {
          post_type: this.postType,
          limit: this.limit,
          skip: this.skip,
          order: this.order
        }
      }
    }
  }
}
</script>