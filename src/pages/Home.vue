<template>
  <div class="container">
    <h1 class="title" v-if="title">{{title.name}}</h1>
    <menu-container :menuName="'primary-navigation'">
      <home-menu slot-scope="menu" :menuItems="menu.items" v-if="menu.items"/>
    </menu-container>
  </div> 
</template>

<script>
import Page from '@/components/page/page'
import MenuContainer from '@/components/menu/menuContainer'
import HomeMenu from '@/components/menu/homeMenu'
import {mapState} from 'vuex'
export default {
  name: 'home',
  components: {
    Page, MenuContainer, HomeMenu
  },
  computed: {
    ...mapState({
      title: 'activeMenuName'
    })
  }
}
</script>

<style scoped lang="sass">
  @import "../styles/colors.scss";

  .title{
    font-size: 3rem;
    font-family: var(--mono-font);
    font-weight: 100;
    color: $secondary-color;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .container{
    position: relative;
    background-color: $dark-color;
  }

  .hero{
    position: absolute;
    bottom: 0;
    right: 1rem;
    max-width: 300px;
    display: flex;
    align-items: flex-bottom;

    img{
      width: 100%;
    }
  }
</style>
