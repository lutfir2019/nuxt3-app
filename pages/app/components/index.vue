<script setup lang="ts">
import moment from "moment";
import { ref } from "vue";
import DatePopover from "~/components/custom-component/DatePopover.vue";

definePageMeta({
  layout: "custom",
});

const selectedDate = ref<Date | undefined>();

onMounted(() => {
  selectedDate.value = new Date();
  useBreadcrumbStore().set([
    { label: "Components", icon: "iconamoon:component" },
  ]);
});
</script>

<template>
  <div class="space-y-2">
    <div>{{ moment(selectedDate).format("DD MMMM yyyy HH:mm") }}</div>
    <DatePopover v-model="selectedDate" @change="(e) => console.warn(e)" />
  </div>
</template>
