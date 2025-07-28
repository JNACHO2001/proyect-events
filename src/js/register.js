import { bts } from "./services";

export function registerender() {
    bts()
    const url = "http://localhost:3000"
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");


    const form = document.getElementById("register-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            password: passwordInput.value,
            confirmpassword: confirmPasswordInput.value,
            roleId:2


       }
        if (newUser.password!=newUser.confirmpassword  ) {
            alert("las constraseñas no conciden")
             return
            
        }
        if (!nameInput.value || !emailInput.value || !phoneInput.value || !passwordInput.value) {
            alert("los campos no deben estar vacios ")
            return
            
        }

        const response = await fetch(`${url}/users`, {
            method: "POST",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify(newUser)



        })

        if (response.ok) {
            alert("registrado")


        } else {
            alert("no se pudo registrar")
        }





    })

}