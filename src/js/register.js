import { bts, postRegister } from "./services";

export function registerender() {
  bts();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const form = document.getElementById("register-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      password: passwordInput.value,
      confirmpassword: confirmPasswordInput.value,
      roleId: 2,
    };
    if (newUser.password != newUser.confirmpassword) {
      alert("las constraseñas no conciden");
      return;
    }
    if (
      !nameInput.value ||
      !emailInput.value ||
      !phoneInput.value ||
      !passwordInput.value
    ) {
      alert("los campos no deben estar vacios ");
      return;
    }
    await postRegister(newUser);
  });
}
