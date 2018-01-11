<template>
  <div class="header" v-bind:style="`backgroundImage: url(${this.image});`">
    <div class="header-content">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-header',
  props: ['image']
}
</script>

<style scoped lang="scss">
  @import "../../styles/colors.scss";

  .header{
    grid-column: 1 / 4;
    grid-row: 1;
    padding: 2rem;
    background-color: $secondary-color;
  }

  .header-content{
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .title{
    margin: 0;
    font-weight: 100;
    letter-spacing: .015em;
  }
</style>
