import {  renderUserInfo, setupLogoutButton } from "./home";
import { getViewEvents } from "./services";



export function viewVisitSetup() {
    renderUserInfo()
    setupLogoutButton()
    loadAndDisplayEvents()
    
   
    
    
}
 async function loadAndDisplayEvents() {
  const body = document.querySelector(".event-body"); // Contenedor dinámico
  try {
    const data = await getViewEvents();
    body.innerHTML = "";

    if (!data || data.length === 0) {
      body.innerHTML += `<h3>No hay ningún registro</h3>`;
      return;
    }

    data.forEach((event) => {
      body.innerHTML += renderEventRow(event);
    });

    // Asignar eventos a los botones
   
  } catch (error) {
    console.error("Error al cargar eventos:", error);
  }
}
function renderEventRow(event) {
  return `
    <div class="event-row selected">
      <h3>event</h3>
      <div class="event-name">${event.name}</div>
      <div class="event-description">${event.description}</div>
      <div class="event-capacity">${event.capacity}</div>
      <div class="event-date">${event.date}</div>
      <div class="event-actions">
        <button class="btn-edit action-btn" data-id="${event.id}">Ingresar</button>
        
    </div>
  `;
}




    
