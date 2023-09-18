<script setup>
import { computed } from "vue";

import PanelInfo from "@/components/panelInfo/PanelInfo.vue";
import WorkContent from "@/components/workContent/WorkContent.vue";

const theme = computed({
  get() {
    return this.$store.getters.themeCurrent;
  },
});
</script>

<template>
  <main class="work-page__container" :class="{ light: theme, dark: !theme }">
    <PanelInfo />
    <WorkContent />
  </main>
</template>

<style lang="scss">
@import "./style.scss";
</style>
