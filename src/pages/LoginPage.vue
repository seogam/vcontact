<template lang="pug">
div(class="page")
  div(class="login-form")
    h1 Авторизация

    form(class="login-form__form")
      input(v-model="formData.login" autofocus type="text" class="login-form__input input" placeholder="Логин")
      input(v-model="formData.password" type="password" class="login-form__input input" placeholder="Пароль")
      button(@click.enter="singIn" type="button" :disabled="!isFilled" class="login-form__btn btn btn--add") Войти

    div(v-if="isAuthenticated" class="alert")
      | Не верно указан логин или пароль. #[br] Небольшая подсказочка, логин: demo, пароль: demo
      
</template>

<script setup>
import { useAuth } from "@/composables/useAuth"
const { isAuthenticated, formData, isFilled, singIn } = useAuth()
</script>

<style lang="sass" scoped>
.login-form
  position: relative
  &__form
    display: flex
    flex-direction: column
</style>