<script setup lang="ts">
const { isOpen } = useSidebar();
</script>

<template>
  <div>
    <USlideover v-model="isOpen" side="left">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <SidebarHeader />
        </template>

        <SidebarMain />

        <template #footer>
          <SidebarFooter />
        </template>
      </UCard>
    </USlideover>
  </div>
</template>
