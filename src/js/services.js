import { redirecto } from "../../routes";
const url = "http://localhost:3000";

export function bts() {
  const btnLogin = document.getElementById("btn-login");
  const btnRegister = document.getElementById("btn-register");
  const btnWalcome = document.getElementById("btn-walcome");

  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      redirecto("/login");
    });
  }

  if (btnRegister) {
    btnRegister.addEventListener("click", () => {
      redirecto("/register");
    });
  }

  if (btnWalcome) {
    btnWalcome.addEventListener("click", () => {
      redirecto("/");
    });
  }
}

export async function getlogin(email, password) {
  try {
    const response = await fetch(
      `${url}/users?email=${email}&password=${password}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function postRegister(newUser) {
  try {
    const response = await fetch(`${url}/users`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      alert("registrado");
    } else {
      alert("no se pudo registrar");
      return;
    }
  } catch (error) {
    console.log("se produjo un error", error);
  }
}
export async function postNewEvents(newEvent) {
  try {
    const response = await fetch(`${url}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
    if (response.ok) {
      alert("Registro exitoso");
    } else {
      alert("No se registro");
    }
  } catch (error) {
    console.log("no se cargo la peticion", error);
  }
}

export async function getViewEvents() {
  const response = await fetch(`${url}/events`);
  return await response.json();
}
export async function oneEvent(id) {
  const response = await fetch(`${url}/events/${id}`);
  return response.json();
}

export async function patchEvent(eventId, userId) {
  try {
    const response = await fetch(`${url}/events/${eventId}`);
    const event = await response.json();

    if (event.users.includes(userId)) {
      alert("YA estás inscrito");
      return;
    }

    if (event.users.length >= event.capacity) {
      alert("el evento  esta lleno");
      return;
    }
    await fetch(`${url}/events/${eventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        users: [...event.users, userId],
      }),
    });

   
    alert(" estás inscrito");
  } catch (error) {
    console.error("Error al verificar inscripción:", error);
  }
}

export async function deleteEvents(id) {
  try {
    const response = await fetch(`${url}/events/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("usuario eliminado");
    } else {
      alert("usuario no  eliminado");
    }
  } catch (error) {
    console.log("no se cargo la peticion", error);
  }
}

export function currentuser(user) {
  console.log("usted ha ingresado el sistema");
  localStorage.setItem("current", JSON.stringify(user));
}
