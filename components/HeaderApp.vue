<script setup lang="ts">
import ColorMode from "./custom-component/ColorMode.vue";

const { toggle } = useSidebar();
</script>

<template>
  <div class="bg-gray-900 text-white p-4 shadow">
    <div class="container mx-auto flex justify-between items-center">
      <UButton
        label="Open"
        size="xs"
        variant="ghost"
        class="block md:hidden"
        @click="toggle"
      >
        <UIcon name="carbon:menu" class="w-5 h-5" />
      </UButton>

      <NuxtLink to="/app" class="hidden md:block">
        <h1 class="text-lg font-bold">Nuxt App</h1>
      </NuxtLink>
      <ColorMode />
    </div>
  </div>
</template>
