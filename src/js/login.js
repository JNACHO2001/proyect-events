import { redirecto } from "../../routes";
import { bts, currentuser, getlogin } from "./services";

export function logicrender() {
  bts();

  const emailinput = document.getElementById("email");
  const passwordinput = document.getElementById("password");
  const from = document.getElementById("form");

  from.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailinput.value;
    const password = passwordinput.value;

    if (!email || !password) {
      alert("por favor llenar los campos");
      return;
    }

    try {
      const data = await getlogin(email, password);

      const user = data[0];

      if (!user || user.password !== password) {
        alert("las credenciales son incorrectas ");
        return;
      }
      currentuser(user);
      redirecto("/home");
    } catch (error) {
      console.log(error);
    }
  });
}
