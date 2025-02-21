<script setup lang="ts">
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "./constants/AppConstant";

useHead({
  title: APP_NAME,
});

useSeoMeta({
  title: APP_NAME,
  ogTitle: APP_NAME,
  description: APP_DESCRIPTION,
  ogDescription: APP_DESCRIPTION,
  ogImage: APP_URL,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage page-key="static" />
    <UNotifications />
  </NuxtLayout>
</template>
