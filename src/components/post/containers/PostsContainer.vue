<template>
  <div>
    <slot :posts="posts" :isLoading="isLoading">
    </slot>
  </div>
</template>

<script>
import PostsQuery from '@/graphql/posts.gql'
import {willPrefetch} from 'vue-apollo'

export default willPrefetch({
  name: 'posts-container',
  props: ['postType', 'limit', 'skip', 'order'],
  data () {
    return {
      isLoading: 0
    }
  },
  apollo: {
    posts: {
      query: PostsQuery,
      loadingKey: 'isLoading',
      prefetch: ({route}) => {
        return {
          post_type: this.a.props.postType
        }
      },
      variables () {
        return {
          post_type: this.postType
        }
      }
    }
  }
})
</script>