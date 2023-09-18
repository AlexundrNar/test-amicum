<script setup>
import { computed } from "vue";

import svgLogo from "@/assets/icons/logo.svg";
import svgBolt from "@/assets/icons/bolt.svg";
import svgEnvelope from "@/assets/icons/envelope.svg";
import svgBook from "@/assets/icons/book.svg";
import svgMedal from "@/assets/icons/medal.svg";
import CardWork from "@/UI/CardWork.vue";

const index = localStorage.getItem("idx")

const person = computed({
  get() {
    return this.$store.getters.person[index];
  },
});
</script>

<template>
  <div class="work-content">
    <img :src="svgLogo" alt="logo" />
    <div class="work-content__block">
      <span>{{person.notification}}</span>
      <CardWork label="Начать работу" :img=svgBolt path="/start"/>
      <CardWork label="Уведомления" :img=svgEnvelope path="/notifications"/>
      <CardWork label="Обучение" :img=svgBook path="/study"/>
      <CardWork label="Достижения" :img=svgMedal path="/achievements"/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
