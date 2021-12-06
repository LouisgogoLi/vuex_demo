<template>
  <button @click="handClickMenu">測試vuex</button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const bIsOpen = computed(() => {
      return store.getters.getIsOpen;
    });

    const handClickMenu = () => {
      store.dispatch("handSetOpenState");
    };
    return { handClickMenu, bIsOpen };
  },
};
</script>

<style lang="scss" scoped></style>
