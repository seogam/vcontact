<template lang="pug">
div(class="error")
  h2(class="error__title") Такой 
    strpng(class="error__url") {{ route.path }}  
    span &nbsp; страницы не существует
  p
    RouterLink(to="/" class="error__link") Вернуться на главную
</template>
  
<script setup>
import { onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
</script>

  
<style lang="sass" scoped>
.error
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  &__title
    font: 400 15px/19px var(--main-font)
    color: #000
  &__url
    font-weight: 600
  &__link
    color: #0D87EF
</style>