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
    { id: 4, name: "Monitor 24 inch", price: 3000000 },
    { id: 5, name: "Monitor 27 inch", price: 4500000 },
    { id: 6, name: "Headset Gaming", price: 1500000 },
    { id: 7, name: "Webcam HD", price: 800000 },
    { id: 8, name: "Printer LaserJet", price: 2500000 },
    { id: 9, name: "External SSD 1TB", price: 2000000 },
    { id: 10, name: "Mechanical Keyboard", price: 1700000 },
    { id: 11, name: "USB Hub 4 Port", price: 300000 },
    { id: 12, name: "Wireless Mouse", price: 350000 },
    { id: 13, name: "Gaming Chair", price: 3500000 },
    { id: 14, name: "Drawing Tablet", price: 2800000 },
    { id: 15, name: "Bluetooth Speaker", price: 1200000 },
  ];
});

const page = ref(1);
const pageCount = 5;

const rows = computed(() => {
  return items.value?.slice(
    (page.value - 1) * pageCount,
    page.value * pageCount
  );
});

onMounted(() => {
  useBreadcrumbStore().set([{ label: "Product", icon: "fluent-mdl2:product" }]);
});
</script>

<template>
  <UContainer>
    <h1 class="text-2xl font-bold mb-4">Daftar Barang</h1>
    <UTable :rows="rows" :columns="columns" />
    <div
      class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
    >
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="items?.length"
      />
    </div>
  </UContainer>
</template>
