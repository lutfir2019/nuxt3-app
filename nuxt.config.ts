// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],

  css: ["@/styles/css/app.css"],

  components: {
    dirs: ["~/components"], // Pastikan komponen terdeteksi
  },

  ui: {
    global: true,
  },

  typescript: {
    strict: true,
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL || "http://localhost:3000",
    },
    private: {
      secretKey: process.env.NUXT_SECRET_KEY || "", // Hanya bisa diakses di server
    },
  },

  compatibilityDate: "2025-02-20",
});
