<script setup lang="ts">
import { useBreadcrumbStore } from "@/stores/breadcrumb";
import { computed } from "vue";

const breadcrumbStore = useBreadcrumbStore();
const links = computed(() => breadcrumbStore.links);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="fixed top-0 z-50 w-full shadow">
      <HeaderApp />
    </header>

    <div class="flex flex-1 pt-16">
      <!-- Sidebar -->
      <aside
        class="fixed inset-y-0 left-0 z-40 w-60 shadow md:flex flex-col hidden"
      >
        <Sidebar />
      </aside>

      <!-- Sidebar Mobile -->
      <aside class="fixed inset-y-0 left-0 z-50 md:hidden">
        <SidebarMobile />
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-4 md:pl-64">
        <!-- Breadcrumb -->
        <div class="mb-4">
          <UBreadcrumb :links="links" />
        </div>

        <UContainer class="px-0 md:px-0 lg:px-0">
          <slot />
        </UContainer>
      </main>
    </div>

    <!-- Footer -->
    <footer class="w-full py-2 shadow text-center mt-auto md:pl-64">
      <FooterApp />
    </footer>
  </div>
</template>
