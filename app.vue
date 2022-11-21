<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `Starboard - ${titleChunk}` : 'Starboard';
    }
})
</script>

<template>
    <Html data-theme="dark"></Html>

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
