<script>
import router from '../../router';

export default {
  data() {
    return {
      value: "",
      notThatUser: false
    };
  },
  methods: {
    submit() {
      if (this.value === "Александр") {
        localStorage.setItem("idx", 0)
      }
      if (this.value === "Юлия") {
        localStorage.setItem("idx", 1)
      }
      if (this.value === "Юлия" || this.value === "Александр") {
        router.push("/work")
      } else {
        this.notThatUser = true
      }

    },
  },
};
</script>

<template>
  <div class="home-page">
    <h4>Пользователи:</h4>
    <h4>Александр</h4>
    <h4>Юлия</h4>
    <h1>Главная страница</h1>
    <form action="#" method="post" @submit.prevent="submit">
      <input class="input-text" type="text" v-model="value" />
      <button class="btn" type="submit">Войти</button>
    </form>
    <h5 v-if="notThatUser">Такого пользователя нет</h5>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
