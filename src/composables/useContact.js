import { ref, onMounted } from 'vue'
import { storeToRefs } from "pinia"
import { useContactStore } from "../stores"

export function useContact() {
  const contactStore = useContactStore()
  const { contactItem, contactList } = storeToRefs(contactStore)
  const { add, $reset } = contactStore
  
  const addContact = () => {
    add()
  
  }
  onMounted(() => {
    const list = JSON.parse(localStorage.getItem("contactList")) || [];
    console.log(list)
    contactStore.contactList = [...list];
   })
  
  return { 
    contactItem,
    contactList,
    addContact
  }
}