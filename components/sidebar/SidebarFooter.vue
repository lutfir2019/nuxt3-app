<script setup lang="ts">
const { logout } = useAuthStore();
</script>

<template>
  <div class="w-full">
    <hr class="border-gray-800 mb-4 hidden md:block">

    <UPopover :popper="{ placement: 'top' }">
      <UButton
        color="gray"
        variant="ghost"
        class="w-full flex items-center gap-3"
      >
        <UAvatar alt="Benjamin Canac" size="md" />
        <span class="truncate">Benjamin Canac</span>
      </UButton>

      <template #panel>
        <div class="w-[250px] p-3">
          <UButton color="gray" variant="ghost" class="w-full" @click="logout">
            Logout
          </UButton>
        </div>
      </template>
    </UPopover>
  </div>
</template>
