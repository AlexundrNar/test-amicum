<script>
export default {
  data: () => ({
    date: new Date(),
  }),

  computed: {
    localeDate() {
      return new Date(this.date).toLocaleDateString();
    },
    localeTime() {
      const time =
        String(new Date(this.date).getHours()).padStart(2, "0") +
        ":" +
        String(new Date(this.date).getMinutes()).padStart(2, "0");
      return time;
    },
  },

  created() {
    this.intervalId = setInterval(() => (this.date = Date.now()), 60000);
  },

  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  },
};
</script>

<template>
  <div class="left-block__top top-dark">
    <div class="left-block__top-left">
      <span>{{ localeDate }}</span>
      <span>{{ localeTime }}</span>
    </div>
    <div class="left-block__top-right">
      <span>Выход</span>
      <router-link to="/">
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4444 47H42.5556C45.0067 47 47 45.0067 47 42.5556V33.6667H42.5556V42.5556H11.4444V11.4444H42.5556V20.3333H47V11.4444C47 8.99333 45.0067 7 42.5556 7H11.4444C8.99333 7 7 8.99333 7 11.4444V42.5556C7 45.0067 8.99555 47 11.4444 47Z"
          />
          <path
            d="M29.1538 18L18 27L29.1538 36V29.2477H47V24.7477H29.1538V18Z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss"></style>
