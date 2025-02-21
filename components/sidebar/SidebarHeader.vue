<script setup lang="ts">
const { close } = useSidebar();
</script>

<template>
  <UButton
    color="gray"
    variant="ghost"
    size="sm"
    icon="i-heroicons-x-mark-20-solid"
    class="flex sm:hidden absolute end-5 top-5 z-10"
    square
    padded
    @click="close"
  />
  <div class="flex items-center space-x-4">
    <NuxtLink to="/app">
      <div class="space-y-2">
        Nuxt App
      </div>
    </NuxtLink>
  </div>
</template>
