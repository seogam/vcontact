import{s as m,h as _,o as f,c as b,i as l,v as r,u as n,b as a,j as p,k as u}from"./index-d1383c27.js";import{u as x}from"./index-3c3f2d13.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";function v(){const s=x(),{contactItem:e,contactList:d}=m(s),{add:c,$reset:i}=s,t=()=>{c()};return _(()=>{const o=JSON.parse(localStorage.getItem("contactList"))||[];console.log(o),s.contactList=[...o]}),{contactItem:e,contactList:d,addContact:t}}const C={class:"contact-form"},y={class:"contact-form__label",for:"tag-0"},k={class:"contact-form__label",for:"tag-1"},V={class:"contact-form__label",for:"tag-2"},U={__name:"ContactForm",setup(s){const{contactItem:e,contactList:d,addContact:c}=v();return(i,t)=>(f(),b("form",C,[l(a("input",{class:"contact-form__input input","onUpdate:modelValue":t[0]||(t[0]=o=>n(e).name=o),type:"text",placeholder:"ФИО"},null,512),[[r,n(e).name]]),l(a("input",{class:"contact-form__input input","onUpdate:modelValue":t[1]||(t[1]=o=>n(e).phone=o),type:"text",placeholder:"Номер телефона"},null,512),[[r,n(e).phone]]),l(a("input",{class:"contact-form__input input","onUpdate:modelValue":t[2]||(t[2]=o=>n(e).email=o),type:"text",placeholder:"Email адрес"},null,512),[[r,n(e).email]]),a("label",y,[l(a("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>n(e).roles=o),type:"checkbox",id:"tag-0",name:"",value:"Семья"},null,512),[[p,n(e).roles]]),u("Семья")]),a("label",k,[l(a("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>n(e).roles=o),type:"checkbox",id:"tag-1",name:"",value:"Коллега"},null,512),[[p,n(e).roles]]),u("Коллега")]),a("label",V,[l(a("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>n(e).roles=o),type:"checkbox",id:"tag-2",name:"",value:"Друг"},null,512),[[p,n(e).roles]]),u("Друг")]),a("button",{class:"contact-form__btn btn",type:"button",onClick:t[6]||(t[6]=(...o)=>n(c)&&n(c)(...o))},"Добавить")]))}},B=g(U,[["__scopeId","data-v-b5d29448"]]);export{B as C};