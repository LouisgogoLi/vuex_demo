<template>
  <div id="app">
    <MenuBtn />
    <div class="content" v-if="bIsOpen">
      <img id="img" alt="Vue logo" src="@/assets/images/logo.png" />
    </div>
    <h1>{{ sToken }}</h1>
  </div>
</template>

<script>
import MenuBtn from "@/components/MenuBtn.vue";

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    MenuBtn,
  },
  setup() {
    const store = useStore();

    const bIsOpen = computed(() => {
      return store.getters.getIsOpen;
    });

    const sToken = computed(() => {
      return store.getters["Auth/getToken"];
    });

    onMounted(() => {
      store.dispatch("Auth/handSetToken", "aaaaaaa");
    });

    return { sToken, bIsOpen };
  },
};
</script>

<style lang="scss"></style>
