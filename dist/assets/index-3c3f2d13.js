import{l as s}from"./index-d1383c27.js";const a=s("contactStore",{state:()=>({contactItem:{name:"",phone:"",email:"",roles:[]},contactList:[]}),getters:{getContactByName:t=>e=>t.contactList.filter(o=>o.name.toLowerCase().includes(e))},actions:{add(){console.log("Add"),this.contactList.unshift({id:new Date().getTime(),...this.contactItem}),localStorage.setItem("contactList",JSON.stringify(this.contactList))},remove(t){this.contactList=this.contactList.filter(e=>e.id!==t),this.saveInLocalstore()},saveInLocalstore(){localStorage.setItem("contactList",JSON.stringify(this.contactList))}}});export{a as u};