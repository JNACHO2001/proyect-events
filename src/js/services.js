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
    const response = await fetch(`${url}/users?email=${email}&_expand=role`);
    const data = await response.json();

    const user = data[0];

    if (!user || user.password !== password) {
      alert("las credenciales son incorrectas ");
      return;
    }
    currentuser(user);
    redirecto("/home");
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
export async function postRegister(newUser) {
  try {
    const response = await fetch(`${url}/users`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(newUser)
    

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

export function currentuser(user) {
  console.log("usted ha ingresado el sistema");
  localStorage.setItem("current", JSON.stringify(user));
}
