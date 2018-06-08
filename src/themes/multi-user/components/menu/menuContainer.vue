<template>
  <div>
    <slot :items="menus.items">
    </slot>
  </div>
</template>

<script>
import MenuQuery from "core/graphql/menu.gql";
export default {
  name: "menu-container",
  props: ["menuName"],
  data() {
    return {
      menus: {}
    };
  },
  apollo: {
    menus() {
      return {
        query: MenuQuery,
        variables: {
          menu: this.menuName
        }
      };
    }
  }
};
</script>
