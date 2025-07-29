import { redirecto } from "../../routes";

export function postEvents() {
  const url = "http://localhost:3000/events";
  const nameImput = document.getElementById("eventname");
  const descriptionImput = document.getElementById("eventDescription");
  const dateImput = document.getElementById("eventDate");
  const capacityImput = document.getElementById("eventCapacity");
  const form = document.getElementById("eventform");
  const btnCancel=document.getElementById("cancelBtn")
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
    try {
         const response = await fetch(url, {
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
        console.log("no se cargo la peticion",error)
        
    }
   
  });

}
