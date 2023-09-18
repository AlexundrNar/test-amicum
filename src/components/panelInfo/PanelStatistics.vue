<script setup>
import { computed } from "vue";

import svgInstruct from "@/assets/icons/instruct.png";
import svgTest from "@/assets/icons/test.png";

const index = localStorage.getItem("idx")

const person = computed({
  get() {
    return this.$store.getters.person[index];
  },
});

const date = computed({
  get() {
    return parseInt((new Date(this.$store.getters.person[index].expiration) - new Date()) / (1000*3600*24))
  }
})
</script>

<template>
  <div class="left-block-statistics">
    <div class="left-block-statistics__block">
      <h3>Инструктаж</h3>
      <div class="diagramm"
      :class="{'d-green': person.briefing, 'd-orange': !person.briefing, 'd-blue': person.briefing === null}">
        <img :src="svgInstruct" />
      </div>
    </div>

    <div class="left-block-statistics__block">
      <h3>Предсменный экзаменатор</h3>
      <div class="diagramm"
      :class="{'d-green': person.examiner, 'd-orange': !person.examiner, 'd-blue': person.examiner === null}">
        <img :src="svgTest" />
      </div>
    </div>

    <div class="left-block-statistics__block">
      <h3>Тестов выполнено</h3>
      <div class="pie" style="--c:#B2D63C;"
      :style="{'--p': person.tests / person.testsMax * 100}">
      <div class="diagramm d-blue">
          <h4>{{person.tests}}</h4>
        </div>
      </div>
    </div>
    
    <div class="left-block-statistics__block">
      <h3>Аттестация через</h3>
      <div class="pie"
      :style="{'--p': date / 120 * 100, '--c': date < 30 ? '#EF7F1A' : '#B2D63C'}">
      <div class="diagramm d-blue">
        <h5>{{date}}</h5>
        <p>дней</p>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
