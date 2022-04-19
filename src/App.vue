<template>
  <nav>
    <router-link
      :to="{ name: 'TestView' }"
      :class="{ active: nRouteIndex === 0 }"
      >TestView</router-link
    >
    |
    <router-link
      :to="{ name: 'goldsummary' }"
      :class="{ active: nRouteIndex === 1 }"
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

<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

let aRouterList = ["", "golden"];

const route = useRoute();
const nRouteIndex = ref(0);
watch(
  () => route.path,
  () => {
    const sNowMainPath = route.path.split("/")[1];

    aRouterList.forEach((item, index) => {
      if (item === sNowMainPath) {
        nRouteIndex.value = index;
      }
    });
  }
);
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

    &.active {
      color: #42b983;
    }
  }
}
</style>
