<script setup>
const features = [
  {
    title: 'Cepat & Ringan',
    description: 'Dibangun dengan Nuxt 3 untuk performa optimal.',
  },
  {
    title: 'Komponen Nuxt UI',
    description: 'Menggunakan Nuxt UI untuk tampilan modern.',
  },
  {
    title: 'SEO Friendly',
    description: 'Otomatis dioptimalkan untuk SEO yang lebih baik.',
  },
];
</script>

<template>
  <UContainer class="text-center py-12">
    <!-- Hero Section -->
    <h1 class="text-4xl font-bold">
      Selamat Datang di Nuxt App
    </h1>
    <p class="text-gray-600 mt-4">
      Bangun aplikasi modern dengan Nuxt 3 dan Nuxt UI.
    </p>

    <UButton to="/app" color="primary" size="lg" class="mt-6">
      Mulai Sekarang
    </UButton>

    <!-- Features Section -->
    <div class="grid md:grid-cols-3 gap-6 mt-12">
      <UCard v-for="feature in features" :key="feature.title">
        <h3 class="text-lg font-bold">
          {{ feature.title }}
        </h3>
        <p class="text-gray-600">
          {{ feature.description }}
        </p>
      </UCard>
    </div>
  </UContainer>
</template>
