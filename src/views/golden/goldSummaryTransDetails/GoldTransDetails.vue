<template>
  <h2>{{ nSummary }}</h2>
  <button @click="fnAddNum">增加數字</button>
</template>

<script>
export default {
  name: "GoldTransDetails",
};
</script>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const nSummary = computed(() => {
  return store.getters["golden/goldSummaryTransDetails/getSummary"];
});

const fnAddNum = () => {
  let nSummaryNum = nSummary.value;
  nSummaryNum++;
  store.dispatch("golden/goldSummaryTransDetails/handSetSummary", nSummaryNum);
};
</script>
<style lang="scss"></style>
