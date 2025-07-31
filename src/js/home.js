import { redirecto } from "../../routes";
const url = "http://localhost:3000/events";
export function infoUser() {
  const userInfo = document.querySelector(".user-info");
  const Content = document.querySelector(".events-table");
  const user = JSON.parse(localStorage.getItem("current"));
  userInfo.innerHTML = `<h3>${user.name}</h3>
  <h4>Informacion</h4>
  <p>${user.email} </p>
  <p>${user.phone} </p>
  `;
  getEvents();
  async function getEvents() {
    const response = await fetch(url);
    const data = await response.json();

    

    try {
      if (!data || data.length === 0) {
        console.log("no hay datos");
        Content.innerHTML += `<h3>No hay ningun registro</h3>`;
      } else {
        
        data.forEach((event) => {
          console.log(event.id)
  Content.innerHTML += `
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
});

      }
    } catch (error) {
      console.log("nuevo error", error);
    }
  }
  async function addEvent() {
    const addEvent = document.querySelector(".add-event-btn");
    addEvent.addEventListener("click", (e) => {
      e.preventDefault();

      redirecto("/form");
    });
  }
  addEvent();

  const btnEliminar = document.getElementById("exit");
  btnEliminar.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("current");
    redirecto("/login");
  });
}
