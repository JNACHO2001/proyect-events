import { redirecto } from "../../routes";
import { postNewEvents } from "./services";

export function postEvents() {
 
  const nameImput = document.getElementById("eventname");
  const descriptionImput = document.getElementById("eventDescription");
  const dateImput = document.getElementById("eventDate");
  const capacityImput = document.getElementById("eventCapacity");
  const form = document.getElementById("eventform");
  const btnCancel = document.getElementById("cancelBtn");
  btnCancel.addEventListener("click", () => {
    redirecto("/home");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newEvent = {
      name: nameImput.value,
      description: descriptionImput.value,
      date: dateImput.value,
      capacity: Number(capacityImput.value),
      users: [],
    };
    await postNewEvents(newEvent)
   
  });
}
