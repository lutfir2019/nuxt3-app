export default defineNuxtRouteMiddleware((to) => {
  const getCookiesName = (name: string) => `app_${name}`;

  // Daftar path yang memerlukan autentikasi
  const AUTH_REQUIRED_PAGES = ["/app"];
  const DEFAULT_LOGIN_PATH = "/auth";
  const DEFAULT_APP_PATH = "/app";

  // Ambil token dari cookie
  const appToken = useCookie(getCookiesName("token"));

  const isAuthenticated = !!appToken.value; // Periksa apakah token tersedia
  const isAuthRequired = AUTH_REQUIRED_PAGES.some((path) =>
    to.path.startsWith(path)
  );

  if (isAuthRequired && !isAuthenticated) {
    return navigateTo(DEFAULT_LOGIN_PATH);
  }

  if (isAuthenticated && to.path.startsWith("/auth")) {
    return navigateTo(DEFAULT_APP_PATH);
  }
});
