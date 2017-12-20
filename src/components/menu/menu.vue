<template>
  <ul :class="$style.menu">
    <li>
      <router-link :to="{path: '/'}">Home</router-link>
    </li>
    <li v-for="item in menuItems" :key="item.id">
      <router-link :to="`/${item.navitem.post_title.toLowerCase()}`">{{item.navitem.post_title}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'app-menu',
  props: ['menuItems']
}
</script>

<style module>
  .menu{
    list-style: none;
    padding: 0;
    display: flex;
  }

  .menu li:not(:last-of-type){
    margin-right: 1rem;
  }

  .menu li a{
    color: white;
    text-decoration: none;
    font-family: var(--copy-font);
    font-size: .9rem;
  }
</style>

