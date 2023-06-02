<template lang="pug">
form(class="contact-form")
  input(v-model="contactItem.name" type="text" class="contact-form__input input" placeholder="ФИО")
  input(v-model="contactItem.phone" type="text" class="contact-form__input input" placeholder="Номер телефона")
  input(v-model="contactItem.email" type="text" class="contact-form__input input" placeholder="Email адрес")

  
  label(class="contact-form__label" for="tag-0")
    input(v-model="contactItem.roles" type="checkbox" id="tag-0" name="" value="Семья") 
    | Семья

  label(class="contact-form__label" for="tag-1")
    input(v-model="contactItem.roles" type="checkbox" id="tag-1" name="" value="Коллега") 
    | Коллега

  label(class="contact-form__label" for="tag-2")
    input(v-model="contactItem.roles" type="checkbox" id="tag-2" name="" value="Друг") 
    | Друг

  button(type="button" @click="addContact" class="contact-form__btn btn") Добавить

</template>

<script setup>
import { useContact } from "../composables/useContact.js"
const { contactItem, contactList, addContact } = useContact()
</script>


<style lang="sass" scoped>
.contact-form
  display: flex
  flex-direction: column
  &__label
    align-self: baseline
    margin-bottom: 20px
    border-bottom: 1px dashed rgb(108, 117, 125)
    cursor: pointer
    input[type=checkbox]
      display: none
  &__btn
    margin-bottom: 20px
.contact-list
  display: flex
  flex-direction: column
</style>
