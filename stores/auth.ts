import { defineStore } from 'pinia';

const COOKIE_PREFIX = 'app_';
const TOKEN_COOKIE = `${COOKIE_PREFIX}token`;
const AUTH_ROUTES = {
  APP: '/app',
  AUTH: '/auth',
} as const;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token_data: '' as string | null,
    isAuthenticated_data: false,
  }),

  getters: {
    token: state => state.token_data,
    isAuthenticated: state => state.isAuthenticated_data,
  },

  actions: {
    setToken(newToken: string | null) {
      const token = useCookie(TOKEN_COOKIE);
      token.value = newToken;
      this.token_data = newToken;
      this.isAuthenticated_data = Boolean(newToken);
    },

    login() {
      this.setToken('secret-token');
      navigateTo(AUTH_ROUTES.APP);
    },

    logout() {
      this.setToken(null);
      navigateTo(AUTH_ROUTES.AUTH);
    },
  },
});
