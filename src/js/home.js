import { redirecto } from "../../routes";

const url = "http://localhost:3000/events";

export function infoUser() {
  renderUserInfo();
  setupAddEventButton();
  loadAndDisplayEvents();
  setupLogoutButton();
}

// 1. Mostrar la información del usuario
function renderUserInfo() {
  const userInfo = document.querySelector(".user-info");
  const user = JSON.parse(localStorage.getItem("current"));
  userInfo.innerHTML = `
    <h3>${user.name}</h3>
    <h4>Información</h4>
    <p>${user.email}</p>
    <p>${user.phone}</p>
  `;
}

// 2. Botón para agregar nuevo evento
function setupAddEventButton() {
  const addEvent = document.querySelector(".add-event-btn");
  addEvent.addEventListener("click", (e) => {
    e.preventDefault();
    redirecto("/form");
  });
}

// 3. Obtener eventos y mostrarlos
async function loadAndDisplayEvents() {
  const Content = document.querySelector(".events-table");

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || data.length === 0) {
      Content.innerHTML += `<h3>No hay ningún registro</h3>`;
      return;
    }

    data.forEach((event) => {
      Content.innerHTML += renderEventRow(event);
    });

    // Asignar eventos a los botones
    Content.addEventListener("click", handleEventActions);

  } catch (error) {
    console.error("Error al cargar eventos:", error);
  }
}

// 3.1 Renderizar una fila de evento
function renderEventRow(event) {
  return `
    <div class="event-row selected">
      <h3>event</h3>
      <div class="event-name">${event.name}</div>
      <div class="event-description">${event.description}</div>
      <div class="event-capacity">${event.capacity}</div>
      <div class="event-date">${event.date}</div>
      <div class="event-actions">
        <button class="btn-edit action-btn" data-id="${event.id}">editar</button>
        <button class="btn-delete action-btn" data-id="${event.id}">eliminar</button>
      </div>
    </div>
  `;
}

// 3.2 Manejar botones de editar y eliminar
function handleEventActions(e) {
  const target = e.target;

  if (target.classList.contains("btn-edit")) {
    const id = target.dataset.id;
    console.log("Editar evento con ID:", id);
    // Aquí puedes redirigir a la vista de edición
  }

  if (target.classList.contains("btn-delete")) {
    const id = target.dataset.id;
    console.log("Eliminar evento con ID:", id);
    // Aquí puedes implementar la función de borrado
  }
}

// 4. Botón de cerrar sesión
function setupLogoutButton() {
  const btnEliminar = document.getElementById("exit");
  btnEliminar.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("current");
    redirecto("/login");
  });
}
