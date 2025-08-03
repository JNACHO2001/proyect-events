export function authGuard(route, path) {
  const auth = JSON.parse(localStorage.getItem("current"));
  const isProtected = route.protected;
  const isPublic = ["/login", "/register", "/"].includes(path);

  // Si es ruta protegida y no hay usuario autenticado
  if (isProtected && !auth) {
    return "/walcome";
  }

 

  // Si ya está autenticado y va a una ruta pública
  if (auth && isPublic) {
    // Admin (rolId === 1)
    if (auth.roleId === 1) {
      return "/home";
    }

    // Usuario normal (rolId === 2)
    if (auth.roleId === 2) {
      return "/notFound"; // o quizás "/user-home"
    }
  }

  // Si pasa todo, no redirigir
  return null;
}
