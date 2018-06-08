<template>
  <div class="wrapper">
    <menu-container class="sidebar" :menuName="getSidebarMenuName()">
      <ul class="menu" slot-scope="menu">
        <li class="item" v-for="item in menu.items" :key="item.id">
          <menu-link :link="item.navitem"/>
        </li>
      </ul>
    </menu-container>
    <div class="body">
      <post-content :content="page.post_content"/> 
    </div>
  </div>
</template>

<script>
import MenuContainer from "../../menu/menuContainer";
import MenuLink from "../../menu/menuLink";
import PostContent from "../../post/PostContent";
export default {
  name: "page-with-sidebar",
  props: ["page"],
  components: {
    MenuContainer,
    MenuLink,
    PostContent
  },
  methods: {
    getSidebarMenuName() {
      return this.page.post_meta.filter(item => {
        return item.meta_key === "sidebarmenu";
      })[0].meta_value;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../styles/colors.scss";

.wrapper {
  display: grid;
  grid-template-columns: 5% 1fr 4fr 5%;
  margin-top: 4rem;
}

.sidebar {
  padding: 1rem;
  grid-column: 2;
  display: flex;
  flex-flow: column;
  background-color: $secondary-color;
}

.body {
  grid-column: 3;
}

.post-content {
  padding: 2rem;
  background-color: white;
}

.item {
  a {
    font-size: 1.2rem;
    color: $dark-color;
    text-decoration: none;

    &:hover {
      color: $primary-color;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
}
</style>
