import { redirecto } from "../../routes";

export function infoUser() {
  

  const userInfo =document.querySelector(".user-info")
  const user = JSON.parse(localStorage.getItem("current"));
  userInfo.innerHTML=`<h3>${user.name}</h3>
  <h4>Informacion</h4>
  <p>${user.email} </p>
  <p>${user.phone} </p>
  `
  
async function  addEvent() {
  const addEvent=document.querySelector(".add-event-btn")
  addEvent.addEventListener("click",()=>{
    redirecto("/form")
    

    

  })
  
  
}
 addEvent()


   const btnEliminar=document.getElementById("exit")
  btnEliminar.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.removeItem("current")
    redirecto("/login")


  })

  
 
}
