
import { bts,  getlogin } from "./services";

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
      alert("por favor llenar los campos")
      return
      
    }

    await getlogin(email, password);
  });
  
}
