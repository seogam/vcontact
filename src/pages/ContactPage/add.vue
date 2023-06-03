<template lang="pug">
div(class="page")
  RouterLink(to="/" class="page__back")
    | Назад

  ContactForm(mode="add")
    template(v-slot:title)
      h1 Добавить контакт

</template>

<script setup>
import ContactForm from "@/components/ContactForm.vue"

</script>