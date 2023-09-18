<script>
export default {
  data() {
    return {
      index: null,
    };
  },
  beforeMount() {
    this.index = localStorage.getItem("idx");
  },
  computed: {
    person() {
      return this.$store.getters.person[this.index];
    },
  },
};
</script>

<template>
  <div class="left-block-person">
    <h2>{{ person.name }}</h2>
    <h3>{{ person.born }}</h3>
    <p>Таб №: {{ person.tab }}</p>
    <p>{{ person.spec }}</p>
  </div>
</template>

<style lang="scss"></style>
