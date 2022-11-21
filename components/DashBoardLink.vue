<template>
    <NuxtLink 
        :to="'/servers/' + $route.params.id + to"
        :class="$route.fullPath.replaceAll('/', '').endsWith($route.params.id + to.replaceAll('/', '')) ? 'active': ''"
        class="my-1"
    >
        <slot />
    </NuxtLink>
</template>

<script lang="ts">
export default {
    props: {
        to: {
            type: String,
            required: true,
        }
    },
    created() {
        console.log(this.to)
    }
}
</script>
