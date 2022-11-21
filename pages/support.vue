<template>
    <a :href="link">Click to Redirect</a>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const link = config.public.supportUrl
navigateTo(link, { external: true })
</script>
