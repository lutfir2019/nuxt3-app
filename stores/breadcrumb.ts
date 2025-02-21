import { defineStore } from "pinia";
import { APP_PREFIX_PATH } from "~/constants/AppConstant";

export const useBreadcrumbStore = defineStore("breadcrumb", {
  state: () => ({
    default: [{ label: "Home", icon: "i-heroicons-home", to: APP_PREFIX_PATH }],
    links: [] as { label: string; icon?: string; to?: string }[],
  }),
  actions: {
    set(newLinks: { label: string; icon?: string; to?: string }[]) {
      this.links = [...this.default, ...newLinks];
    },
  },
});
