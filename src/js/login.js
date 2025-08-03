
import { redirecto } from "../../routes";
import { authGuard } from "./guards";
import { bts, currentuser, getlogin } from "./services";

export function logicrender() {
  bts();

  const emailinput = document.getElementById("email");
  const passwordinput = document.getElementById("password");
  const from = document.getElementById("form");

  from.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const email = emailinput.value;
      const password = passwordinput.value;

      if (!email || !password) {
        alert("por favor llenar los campos");
        return;
      }

      const data = await getlogin(email, password);

      const user = data[0];

      if (!user || user.password !== password) {
        alert("las credenciales son incorrectas ");
        return;
      }
      currentuser(user);
      if (user.roleId === 1) {
        redirecto("/home");  // Admin
      } else if (user.roleId === 2) {
        redirecto("/viewVisit")
         // Usuario común
      } else {
        redirecto("/notFound"); // Rol desconocido
      }
      
     
    } catch (error) {
      console.log(error);
    }
  });
}
