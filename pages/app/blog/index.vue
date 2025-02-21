<script setup lang="ts">
definePageMeta({
  layout: "custom", // Nama layout yang akan digunakan
});

onMounted(() => {
  useBreadcrumbStore().set([{ label: "Blog", icon: "i-heroicons-user" }]);
});
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex justify-between">
        <h1>Welcome to Nuxt UI Starter</h1>
        <ColorScheme>
          <USelect
            v-model="$colorMode.preference"
            :options="['system', 'light', 'dark']"
          />
        </ColorScheme>
      </div>
    </template>
    <UButton
      icon="i-heroicons-book-open"
      to="https://ui.nuxt.com"
      target="_blank"
    >
      Open Nuxt UI Documentation
    </UButton>
  </UCard>
</template>
