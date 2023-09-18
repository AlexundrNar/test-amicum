<script setup>
import { computed } from "vue";

import PanelTopVue from "./PanelTop.vue";
import PanelThemeVue from "./PanelTheme.vue";
import PanelPersonVue from "./PanelPerson.vue";
import PanelStatisticsVue from "./PanelStatistics.vue";

const theme = computed({
  get() {
    return this.$store.getters.themeCurrent;
  },
});
</script>

<template>
  <div class="left-block" :class="{ lightpanel: theme, darkpanel: !theme }">
    <PanelTopVue />
    <PanelThemeVue />
    <PanelPersonVue />
    <PanelStatisticsVue />
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
