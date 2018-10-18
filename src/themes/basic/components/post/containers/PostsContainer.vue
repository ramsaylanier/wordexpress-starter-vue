<template>
  <div>
    <slot :posts="posts" :isLoading="isLoading">
    </slot>
  </div>
</template>

<script>
import PostsQuery from "core/graphql/posts.gql";

export default {
  name: "posts-container",
  props: ["postType", "limit", "skip", "order"],
  data() {
    return {
      isLoading: 0
    };
  },
  apollo: {
    posts: {
      query: PostsQuery,
      loadingKey: "isLoading",
      prefetch: () => {
        return {
          post_type: this.a.props.postType
        };
      },
      variables() {
        return {
          post_type: this.postType
        };
      }
    }
  }
};
</script>
