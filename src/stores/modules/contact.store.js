import { defineStore } from "pinia"

const temContact = {
  name: null,
  phone: null,
  email: null,
  roles: []
}

const useContactStore = defineStore("contactStore", {
  state: () => {
    return {
      contactItem: {
        ...temContact
      },
      contactList: [],
      searchQuery: ""
    }
  },
  getters: {
    filteredContactList: (state) => {
      return state.contactList.filter((item) => {
        if(state.searchQuery) {
          return (item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          item.email.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          item.phone.includes(state.searchQuery))
          // return item.roles.indexOf(state.searchQuery)
        } else {
          return state.contactList
        }
      })
    },
  },
  actions: {

    add() {
      this.contactList.unshift({id: new Date().getTime(), ...this.contactItem})
      this.saveInLocalstore()
    },

    edit(contactId) {
      this.contactList.forEach(item => {
        if(item.id === contactId) {
          item = Object.assign(item, this.contactItem)
        }
      })
      this.saveInLocalstore()
    },

    remove(contactId) {
      this.contactList = this.contactList.filter(item => item.id !== contactId)
      this.saveInLocalstore()
    },
    
    reset() {
      delete this.contactItem.id
      this.contactItem.name = null
      this.contactItem.phone = null
      this.contactItem.email = null
      this.contactItem.roles = []
    },

    resetSearch() {
      this.searchQuery = ""
    },

    saveInLocalstore() {
      localStorage.setItem("contactList", JSON.stringify(this.contactList))
    }

  }
})

export default useContactStore;