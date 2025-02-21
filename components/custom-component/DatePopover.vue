<script setup lang="ts">
import { computed } from "vue";
import moment from "moment";
import DatePicker from "./DatePicker.vue";

interface Props {
  modelValue?: Date;
  label?: string;
  isRequired?: boolean;
  formatString?: string;
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "right";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => new Date(),
  label: "",
  isRequired: false,
  formatString: "DD MMMM yyy",
  placement: "bottom-start",
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [date: Date];
  change: [date: Date];
}>();

const localDate = computed({
  get: () => props.modelValue,
  set: (value: Date) => {
    emit("update:modelValue", value);
    emit("change", value);
  },
});

const formattedDate = computed(() => {
  return moment(localDate.value).format(props.formatString);
});
</script>

<template>
  <ClientOnly>
    <UPopover :popper="{ placement }">
      <UButton
        :icon="'i-heroicons-calendar-days-20-solid'"
        :label="label || formattedDate"
        :disabled="disabled"
      />

      <template #panel="{ close }">
        <DatePicker
          v-model="localDate"
          :is-required="isRequired"
          @close="close"
        />
      </template>
    </UPopover>
  </ClientOnly>
</template>

<!-- Basic usage -->
<!-- <DatePickerPopover v-model="date" /> -->

<!-- Advanced usage -->
<!-- <DatePickerPopover
  v-model="date"
  label="Select Date"
  format-string="yyyy-MM-dd"
  placement="bottom"
  :is-required="true"
  :disabled="false"
  @change="handleDateChange"
/> -->
