<template>
  <router-link :to={path}>
    <div>
      <h3>{{label}}</h3>
      <img :src=img />
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  label: String,
  img: String,
  path: String
})
</script>

<style></style>
