<template>
    <div>
        <AppNavigation />
        <NuxtPage :transition="{
            name: 'page',
            mode: 'out-in'
        }" />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.2s ease;
}

.page-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.page-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
