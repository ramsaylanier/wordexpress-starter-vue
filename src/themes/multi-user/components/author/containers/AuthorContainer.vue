<template>
  <div>
    <slot :author="user" :isLoading="isLoading"></slot>
  </div>
</template>

<script>
import UserQuery from "core/graphql/user.gql";
import { willPrefetch } from "vue-apollo";

export default willPrefetch({
  name: "author-container",
  data() {
    return {
      isLoading: 0
    };
  },
  apollo: {
    user: {
      query: UserQuery,
      loadingKey: "isLoading",
      prefetch({ route }) {
        return {
          name: route.params.name
        };
      },
      variables() {
        return {
          name: this.$route.params.name
        };
      }
    }
  }
});
</script>
