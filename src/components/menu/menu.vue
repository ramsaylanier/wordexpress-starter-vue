<template>
  <ul class="menu">
    <li class="item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="item" v-for="item in menuItems" :key="item.id">
      <menu-link :link="item.navitem"/>
    </li>
  </ul>
</template>

<script>
import MenuLink from './menuLink'
export default {
  name: 'app-menu',
  props: ['menuItems'],
  components: {
    MenuLink
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/colors";

  .menu{
    padding: 0;
    display: flex;
  }

  .item{
    padding: 0rem 1rem;

    a{
      text-decoration: none;
      color: $secondary-color;
      font-size: .9rem;
    }
  }
</style>

