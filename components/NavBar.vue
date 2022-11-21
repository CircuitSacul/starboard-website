<template>
    <div class="navbar" :class="[isHome ? 'bg-black/50 backdrop-blur-md fixed top-0 z-50' : 'bg-base-300']">
        <div class="navbar-start">
            <NuxtLink to="/" class="btn btn-ghost btn normal-case text-xl">Starboard</NuxtLink>
        </div>

        <div class="navbar-center hidden md:flex">
            <NuxtLink to="/" class="btn btn-ghost btn-sm">About</NuxtLink>
            <NuxtLink to="/servers" class="btn btn-ghost btn-sm">Dashboard</NuxtLink>
            <NuxtLink to="/invite" class="btn btn-ghost btn-sm">Invite</NuxtLink>
            <NuxtLink to="/support" class="btn btn-ghost btn-sm">Support</NuxtLink>
            <NuxtLink to="/premium" class="btn btn-ghost btn-sm">Premium</NuxtLink>
        </div>

        <div class="navbar-end">
            <NuxtLink to="/servers" class="btn btn-primary btn-outline">Login</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        isHome: Boolean
    }
}
</script>
