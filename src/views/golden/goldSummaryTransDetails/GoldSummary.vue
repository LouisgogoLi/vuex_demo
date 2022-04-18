<template>
  <h1>測試</h1>
  <h2>{{ nSummary }}</h2>
</template>

<script>
export default {
  name: "GoldSummary",
};
</script>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const nSummary = computed(() => {
  return store.getters["golden/goldSummaryTransDetails/getSummary"];
});
</script>
<style lang="scss"></style>
