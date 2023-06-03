<template lang="pug">
div(class="page")
  RouterLink(to="/" class="page__back")
    | Назад
  
  ContactForm(mode="edit")
    template(v-slot:title)
      h1 Редактирование
</template>

<script setup>
import { computed, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useContactStore } from "@/stores"
import ContactForm from "@/components/ContactForm.vue"

const contactStore = useContactStore()
const route = useRoute()
const router = useRouter()
const { id } = route.params

onMounted(() => {
  contactStore.$patch({
    contactItem: singleContact,
  })
})

const singleContact = computed(() => {
  return contactStore.contactList.find(item => item.id === parseInt(id))
})
</script>