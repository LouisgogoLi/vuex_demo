<template>
  <button @click="handClickMenu">測試vuex</button>
</template>

<script>
export default {
  name: "MenuBtn",
};
</script>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const handClickMenu = () => {
  store.dispatch("handSetOpenState");
};
</script>

<style lang="scss" scoped></style>
