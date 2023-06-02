import { ref, reactive, onMounted } from "vue"
import { defineStore } from "pinia"


export const useContactStore = defineStore("contactStore", {
  state: () => {
    return {
      contactItem: {
        name: "",
        phone: "",
        email: "",
        roles: []
      },
      contactList: []
    }
  },
  getters: {
    getContactByName: (state) => {
      return (contactName) => state.contactList.filter((item) => item.name.toLowerCase().includes(contactName))
    },
  },
  actions: {
     add() {
      console.log("Add")
      this.contactList.unshift({id: new Date().getTime(), ...this.contactItem})
      localStorage.setItem("contactList", JSON.stringify(this.contactList))
    },
    remove(id) {
      this.contactList = this.contactList.filter(item => item.id !== id)
      this.saveInLocalstore()
    },
    saveInLocalstore() {
      localStorage.setItem("contactList", JSON.stringify(this.contactList))
    }
  }

})
// export const useContactStore = defineStore('contactStore', () => {
//   const searchQuery = ref("")
//   const tempContact = reactive({
//     name: "",
//     phone: "",
//     email: "",
//     roles: []
//   })
//   let contactItem = reactive({
//     ...tempContact
//   })

//   let contactList = ref([])

//   function add() {
//     console.log("Add")
//     contactList.value.unshift({id: new Date().getTime(), ...contactItem})
//     saveInLocalstore()
//   }

//   function remove(id) {
//     contactList.value = contactList.value.filter(item => item.id !== id)
//     saveInLocalstore()
//   }

//   function single(id) {
//     return contactList.value.filter(item => item.id === id)
//   }

//   function $reset() {
//     contactItem = {...tempContact}
//   }

//   onMounted(() => {
//     const list = JSON.parse(localStorage.getItem("contactList")) || [];
//     contactList.value = [...list];
//   });

//   return {
//     contactItem,
//     contactList,
//     add,
//     remove,
//     single,
//     $reset
//   }
// })

