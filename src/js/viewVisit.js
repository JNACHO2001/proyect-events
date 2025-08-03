import { renderUserInfo, setupLogoutButton } from "./home";
import { getViewEvents } from "./services";

export function viewVisitSetup() {
  renderUserInfo();
  setupLogoutButton();
  loadAndDisplayEvents();
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
    body.addEventListener("click", handleEventActions);

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

async function handleEventActions(e) {
  const user = JSON.parse(localStorage.getItem("current"));
  const target = e.target;

  if (target.classList.contains("btn-edit")) {
    const id = target.dataset.id;
    const events = await getViewEvents();

    const event = events.find((ev) => ev.id == id);

    if (!event.users.includes(user.id)) {
      alert("no estas inscrito " + user.name + " al evento " + event.name);
    }
  }
}
