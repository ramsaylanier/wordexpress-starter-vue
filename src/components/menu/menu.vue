<template>
  <ul class="menu" v-if="menuItems">
    <li class="item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="item" v-for="item in menuItems" :key="item.id">
      <router-link :to="`/${item.navitem.post_name}`">{{item.navitem.post_title}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'app-menu',
  props: ['menuItems']
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

