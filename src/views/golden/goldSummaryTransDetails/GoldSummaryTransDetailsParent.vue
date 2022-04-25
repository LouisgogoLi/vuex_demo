<template>
  <div class="VUEJSPage">
    <nav>
      <router-link :to="{ name: 'goldsummary' }">帳戶內容查詢</router-link>
      <router-link :to="{ name: 'goldtransDetails' }">交易明細查詢</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import storeIndex from "@/store/index.js";
import goldSummaryTransDetails from "@/store/golden/goldSummaryTransDetails";
storeIndex.registerModule(
  ["golden", "goldSummaryTransDetails"],
  goldSummaryTransDetails
);

export default {
  name: "GoldSummaryTransDetailsParent",
};
</script>

<script setup></script>

<style lang="scss">
.VUEJSPage {
  width: 100%;
  height: 350px;
  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: red;
      }
    }
  }
}
</style>
