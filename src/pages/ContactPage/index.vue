<template lang="pug">
div(class="page")
  div(class="page__headline")
    h1 Телефонная книжка
    RouterLink(to="/add" class="page__btn btn btn--add")
      | Добавить контакт

  ContactSearch
  ContactList
</template>

<script setup>
import ContactSearch from "@/components/ContactSearch.vue"
import ContactList from "@/components/ContactList.vue"
</script>
