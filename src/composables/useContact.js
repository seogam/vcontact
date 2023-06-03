import { onMounted, computed } from 'vue'
import { storeToRefs } from "pinia"
import { useContactStore } from "@/stores"
import { useRoute, useRouter } from "vue-router"

export function useContact() {
  const contactStore = useContactStore()
  const { contactItem, contactList, searchQuery } = storeToRefs(contactStore)
  const { add, edit, reset, resetSearch } = contactStore

  const route = useRoute()
  const router = useRouter()
  const { id: contactId } = route.params

  const addContact = () => {
    add()
    router.push({ path: '/' })
  }

  const editContact = (contactId) => {
    edit(contactId)
    router.push({ path: '/' })
  }

  const isFilled = computed(() => {
    console.log(contactItem.name)
    if(contactItem.name && contactItem.phone && contactItem.email) return true
    return false
  })

  const resetSearchQuery = () => {
    resetSearch()
  }

  onMounted(() => {
    reset()
    contactStore.contactList = [...JSON.parse(localStorage.getItem("contactList"))];
   })
  
  return { 
    contactItem,
    contactList,
    isFilled,
    addContact,
    editContact,
    resetSearchQuery
  }
}