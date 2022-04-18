<template>
  <nav>
    <router-link :to="{ name: 'TestView' }">TestView</router-link> |
    <router-link :to="{ name: 'goldsummary' }"
      >黃金存摺帳戶內容查詢</router-link
    >
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
