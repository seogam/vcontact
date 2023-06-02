<template lang="pug">
TransitionGroup(v-if="contactStore.contactList.length" class="contact-list" name="list" tag="ul")
  li(v-for="item, index in contactStore.contactList" :key="item.id" class="contact-list__item")
    span(class="contact-list__name") {{ item.name }} - {{ item.phone }}
    div(class="contact-list__btns")

      RouterLink(:to="`/single/${item.id}`" class="contact-list__btn")
        svg.bi.bi-pencil(xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16')
          path(d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z')

      span(class="contact-list__btn" @click="contactStore.remove(item.id)")
        svg.bi.bi-trash(xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16')
          path(d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z')
          path(d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z')

  //- pre(style="position: fixed; top: 0; left: 0") {{ contactStore }}
</template>

<script setup>
import { reactive } from "vue"
import { useContactStore } from "../stores"
const contactStore = useContactStore()
</script>

<style lang="sass" scoped>
.contact-list
  display: flex
  flex-direction: column
  list-style: none
  margin: 0
  padding: 0
  border: 1px solid rgba(0,0,0,.125)
  border-radius: 5px
  &__item
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0.5rem 1rem
    color: #212529
    text-decoration: none
    background-color: #fff
    &:not(:last-child)
      border-bottom: 1px solid rgba(0,0,0,.125)
  &__name
    color: rgb(108, 117, 125)
  &__btns
    display: inline-flex
    gap: 15px
    color: rgba(108, 117, 125, 0.75)
  &__btn
    cursor: pointer
</style>