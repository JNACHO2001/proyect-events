import { redirecto } from "../../routes";
import { oneEvent, postNewEvents, putEvent } from "./services";

export function postEvents() {
  const title = document.querySelector(".form-title");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const nameImput = document.getElementById("eventname");
  const descriptionImput = document.getElementById("eventDescription");
  const dateImput = document.getElementById("eventDate");
  const capacityImput = document.getElementById("eventCapacity");
  const form = document.getElementById("eventform");
  const btnCancel = document.getElementById("cancelBtn");
  const btnSave = document.querySelector(".save-btn");
  btnCancel.addEventListener("click", () => {
    redirecto("/home");
  });

  if (id) {
    title.textContent = "Update Event";
    btnSave.style.backgroundColor = "green";
    btnSave.textContent = "Update";

    oneEvent(id).then((event) => {
      nameImput.value = event.name;
      descriptionImput.value = event.description;
      dateImput.value = event.date;
      capacityImput.value = event.capacity;
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const updateEvent = {
        name: nameImput.value,
        description: descriptionImput.value,
        date: dateImput.value,
        capacity: parseInt(capacityImput.value),
        users: [],
      };

      await putEvent(id, updateEvent);
    });
  } else {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const newEvent = {
        name: nameImput.value,
        description: descriptionImput.value,
        date: dateImput.value,
        capacity: parseInt(capacityImput.value),
        users: [],
      };
      await postNewEvents(newEvent);
    });
  }
}
