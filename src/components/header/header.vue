<template>
  <header :class="$style.header">
    <menu-container :menuName="'primary-navigation'">
      <app-menu slot-scope="menu" :menuItems="menu.items"/>
    </menu-container>
  </header>
</template>

<script>
import MenuContainer from '@/components/menu/menuContainer'
import AppMenu from '@/components/menu/menu'
export default {
  name: 'app-header',
  components: {
    MenuContainer, AppMenu
  }
}
</script>

<style module>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--dark-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem;
    z-index: 10;
    height: 40px;
  }
</style>
