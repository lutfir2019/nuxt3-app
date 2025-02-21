<script setup lang="ts">
import { onMounted, ref } from "vue";

definePageMeta({
  layout: "custom",
});

interface Items {
  id: number;
  name: string;
  price: number;
}

const items = ref<Items[]>([]);

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nama Barang" },
  { key: "price", label: "Harga" },
];

onMounted(() => {
  // Simulasi data barang
  items.value = [
    { id: 1, name: "Laptop", price: 12000000 },
    { id: 2, name: "Mouse", price: 250000 },
    { id: 3, name: "Keyboard", price: 500000 },
    { id: 4, name: "Monitor", price: 3000000 },
  ];
});

onMounted(() => {
  useBreadcrumbStore().set([{ label: "Product", icon: "fluent-mdl2:product" }]);
});
</script>

<template>
  <UContainer>
    <h1 class="text-2xl font-bold mb-4">Daftar Barang</h1>
    <UTable :rows="items" :columns="columns" />
  </UContainer>
</template>
