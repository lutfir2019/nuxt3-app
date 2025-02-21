<script setup lang="ts">
import type { InferType } from "yup";
import { reactive } from "vue";
import { date, object, string } from "yup";
import DatePopover from "~/components/custom-component/DatePopover.vue";

definePageMeta({
  layout: "custom",
});

const toast = useToast();

const schema = object({
  email: string().email("Invalid email").required("Required"),
  date: date().required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: "",
  password: "",
  date: new Date(),
});

async function onSubmit(values: { data: Schema }) {
  toast.add({
    id: "form_submitted",
    title: "Form Submitted.",
    description: `${JSON.stringify(values.data)}`,
  });
}

onMounted(() => {
  useBreadcrumbStore().set([]);
});
</script>

<template>
  <UCard>
    <span>Email: {{ state.email }}</span>

    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 mt-5"
      @submit="onSubmit"
    >
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UFormGroup label="Date" name="date">
        <DatePopover v-model="state.date" />
      </UFormGroup>

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </UCard>
</template>
