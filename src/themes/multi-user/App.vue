<template>
  <div id="app">
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oswald:300|Source+Sans+Pro:300,400|Source+Code+Pro:400,700');
@import "./styles/reset.css";
@import "./styles/typography.css";

*{
  box-sizing: border-box;
}

body{
  font-family: var(--copy-font);
  background-color: var(--dark-color);
  padding: 0;
  margin: 0;
}

:root{
  --primary-color: #B60FE0;
  --secondary-color: #acf3a7;
  --dark-color: #380436;
  --light-grey-color: #f3f3f3;

  --heading-font: 'Oswald', sans-serif;
  --copy-font: 'Source Sans Pro', sans-serif;
  --mono-font: 'Source Code Pro', monospace;
}
</style>