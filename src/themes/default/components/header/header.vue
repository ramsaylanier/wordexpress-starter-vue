<template>
  <header class="header">
    <div class="wrapper">
      <menu-container :menuName="'primary-navigation'">
        <app-menu slot-scope="menu" :menuItems="menu.items"/>
      </menu-container>
    </div>
  </header>
</template>

<script>
import MenuContainer from '../menu/menuContainer'
import AppMenu from '../menu/menu'
export default {
  name: 'app-header',
  components: {
    MenuContainer, AppMenu
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/colors.scss";

  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 40px;
    display: flex;
    justify-content: center;
  }

  .wrapper{
    background: darken($dark-color, 3%);
    height: 100%;
    padding: 0rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: $secondary-color;
  }
</style>
