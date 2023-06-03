<template lang="pug">

div(class="contact-form")
  slot(name="title")
  form(class="contact-form__form")
    input(v-model="contactItem.name" type="text" class="contact-form__input input" placeholder="ФИО")
    input(
      v-model="contactItem.phone" 
      v-maska 
      data-maska="+(998) ##-###-##-##" 
      data-maska-eager 
      type="text" 
      class="contact-form__input input" 
      placeholder="Номер телефона"
    )
    input(v-model="contactItem.email" type="text" class="contact-form__input input" placeholder="Email адрес")

    div(class="contact-form__roles")
      label(class="contact-form__label" for="tag-0")
        input(v-model="contactItem.roles" type="checkbox" id="tag-0" name="" value="Семья") 
        span(class="contact-form__name") Семья

      label(class="contact-form__label" for="tag-1")
        input(v-model="contactItem.roles" type="checkbox" id="tag-1" name="" value="Коллега") 
        span(class="contact-form__name")  Коллега

      label(class="contact-form__label" for="tag-2")
        input(v-model="contactItem.roles" type="checkbox" id="tag-2" name="" value="Друг") 
        span(class="contact-form__name")  Друг

    button(v-if="mode === 'add'" @click="addContact" :disabled="!isFilled" type="button"  class="contact-form__btn btn btn--add") Добавить
    button(v-if="mode === 'edit'" type="button" @click="editContact(contactItem.id)" class="contact-form__btn btn btn--add") Редактировать

</template>

<script setup>
import { computed } from "vue"
import { vMaska } from "maska"
import { useContact } from "@/composables/useContact.js"
const { contactItem, isFilled, addContact, editContact } = useContact()
const props = defineProps({
  mode: {
    type: String,
    default: "add"
  }
})

</script>

<style lang="sass" scoped>
.contact-form
  $parent: &
  &__form
    display: flex
    flex-direction: column
  &__label
    align-self: baseline
    margin-bottom: 20px
    cursor: pointer
    input[type=checkbox]
      display: none
    input:checked ~ #{$parent}__name 
      border-color: transparent
      color: green
  &__name
    color: rgb(108, 117, 125)
    border-bottom: 1px dashed rgb(108, 117, 125)
  &__btn
    margin-bottom: 20px
  &__roles
    display: flex
    justify-content: space-evenly
</style>
