<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const { login } = useAuthStore();
</script>

<template>
  <UContainer class="h-screen w-full flex justify-center items-center">
    <UCard class="w-full max-w-sm">
      <div class="flex justify-center items-center flex-col">
        <h1 class="text-2xl font-bold">
          Login
        </h1>
        <UButton color="primary" class="mt-4" @click="login">
          Login
        </UButton>
      </div>
    </UCard>
  </UContainer>
</template>
