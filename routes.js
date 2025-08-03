import { postEvents } from "./src/js/form";
import { authGuard } from "./src/js/guards";
import { setupUser } from "./src/js/home";
import { logicrender } from "./src/js/login";
import { notFound } from "./src/js/notFound";
import { registerender } from "./src/js/register";
import { viewVisitSetup } from "./src/js/viewVisit";
import { logicWalcome } from "./src/js/walcome";

const routes = {
  "/": {
    path: "/src/views/pages/walcome.html",
    setup: logicWalcome,
  },
  "/login": {
    path: "/src/views/pages/login.html",
    setup: logicrender,
  },
  "/register": {
    path: "/src/views/pages/register.html",
    setup: registerender,
  },
  "/notFound": {
    path: "/src/views/pages/notFound.html",
    setup: notFound,
  },

  "/home": {
    path: "/src/views/pages/home.html",
    setup: setupUser,
    protected: true,
  },
  "/form": {
    path: "/src/views/pages/form.html",
    setup: postEvents,
    protected: true,
  },
  "/viewVisit": {
    path: "/src/views/pages/viewVisit.html",
    setup:viewVisitSetup
    
   
  }
};

export async function renderRouter() {
  const app = document.getElementById("app");

  const path = window.location.pathname;

  const route = routes[path] || routes["/notFound"];

  const applyGuardian = authGuard(route, path);

  if (applyGuardian) {
    window.history.pushState({}, "", applyGuardian);
    return renderRouter();
  }

  try {
    const file = await fetch(route.path);

    const content = await file.text();

    app.innerHTML = content;

    if (route.setup) {
      route.setup();
    }
  } catch (error) {
    console.log("error encontrado", error);
  }
}

export function redirecto(path) {
  window.history.pushState({}, "", `${path}`);
  return renderRouter();
}
