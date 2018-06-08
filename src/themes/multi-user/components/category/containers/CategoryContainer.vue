<template>
  <category-list v-if="category" :category="category"/>
</template>

<script>
import CategoryQuery from "core/graphql/category.gql";
import CategoryList from "../CategoryList";

export default {
  name: "category-container",
  data() {
    return {
      post: {}
    };
  },
  watch: {
    "$route.params.id": function(id) {
      this.$apollo.queries.category.refetch({ term_id: id });
    }
  },
  apollo: {
    category() {
      return {
        query: CategoryQuery,
        variables: {
          term_id: this.$route.params.id
        }
      };
    }
  },
  components: {
    CategoryList
  }
};
</script>
