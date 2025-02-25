<script setup lang="ts">
// Dynamic page title
useHead({
  title: "Page Not Found - 404",
  meta: [
    {
      name: "description",
      content: "The page you are looking for cannot be found",
    },
  ],
});
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900"
  >
    <div class="max-w-3xl w-full text-center">
      <!-- 404 error illustration with animation -->
      <div class="mx-auto w-64 md:w-96 mb-8">
        <UIcon
          name="i-heroicons-face-frown"
          class="h-32 w-32 mx-auto text-primary-500 animate-face"
        />
      </div>

      <!-- Error message -->
      <h1
        class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
      >
        404
      </h1>
      <h2
        class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6"
      >
        Page Not Found
      </h2>

      <p class="text-gray-600 dark:text-gray-300 text-lg mb-8">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <!-- Navigation buttons -->
      <div class="flex flex-col md:flex-row justify-center gap-4">
        <UButton
          size="lg"
          variant="solid"
          color="primary"
          icon="i-heroicons-arrow-left"
          to="/"
          class="w-full md:w-auto"
        >
          Return to Home
        </UButton>
      </div>
    </div>
  </div>
</template>

<!-- Animations -->
<style scoped>
/* Button jitter animation */
@keyframes jitter {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0);
  }
}

.u-button:hover {
  animation: jitter 0.5s ease;
}

/* Face animation - subtle shake and pulse */
@keyframes faceSadness {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: translateY(10px) rotate(-5deg);
    opacity: 0.9;
  }
  50% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  75% {
    transform: translateY(10px) rotate(5deg);
    opacity: 0.9;
  }
}

.animate-face {
  animation: faceSadness 3s ease-in-out infinite;
  transform-origin: center;
}
</style>
