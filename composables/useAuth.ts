export function useAuth() {
  const getCookiesName = (name: string) => `app_${name}`;

  // Ambil token dari cookie
  const token = useCookie(getCookiesName('token'));

  // Periksa apakah pengguna sudah login
  const isAuthenticated = computed(() => !!token.value);

  // Login (set token ke cookie)
  const login = (newToken: string) => {
    token.value = newToken;
    navigateTo('/app');
  };

  // Logout (hapus token dari cookie)
  const logout = () => {
    token.value = null;
    navigateTo('/auth');
  };

  return {
    token,
    isAuthenticated,
    login,
    logout,
  };
}
