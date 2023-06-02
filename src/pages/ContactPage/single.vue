<template lang="pug">
h1 dasd
pre {{ single }}
</template>

<script setup>
import { useContactStore } from "@/stores"
const contactStore = useContactStore()
const single = contactStore.single()
</script>