import { redirecto } from "../../routes";
import { postNewEvents } from "./services";

export function postEvents() {
  const params = new URLSearchParams(window.location.search)
  const id = params.get("id")
 
  const nameImput = document.getElementById("eventname");
  const descriptionImput = document.getElementById("eventDescription");
  const dateImput = document.getElementById("eventDate");
  const capacityImput = document.getElementById("eventCapacity");
  const form = document.getElementById("eventform");
  const btnCancel = document.getElementById("cancelBtn");
  const btnSave = document.querySelector(".save-btn")
  btnCancel.addEventListener("click", () => {
    redirecto("/home");
  });



  if (id) {
    console.log("editando",id)
    btnSave .style.backgroundColor ="green"
    btnSave.textContent ="Update"


    
  }else{
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






  
}
