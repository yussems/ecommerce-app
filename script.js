const firstVisit = document.querySelector(".first-Visit");
const formVal = document.querySelector(".formVal");
const localInput = document.querySelector(".localInput");
const userName = document.querySelector(".userName");
const unsubit = document.querySelector(".unsubit");
const logout = document.querySelector(".logout");

//exit from the site
logout.addEventListener("click", () => {
  sessionStorage.removeItem("name");
  window.location.reload();
});

//check the user
function setName() {
  if (
    sessionStorage.getItem("name") === "" ||
    sessionStorage.getItem("name") === null
  ) {
    firstVisit.classList.add("d-none");
    // userName.innerHTML = "Ziyaretçi";
  }
  if (sessionStorage.getItem("name") !== "") {
    firstVisit.classList.add("d-none");

    userName.innerHTML = `Merhaba ${sessionStorage
      .getItem("name")
      ?.toUpperCase()}`;
  }
}

//validation of the form
formVal?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = localInput.value;
  sessionStorage.setItem("name", name);
  setName();
});

unsubit?.addEventListener("click", () => {
  sessionStorage.setItem("name", "");
  setName();
});


userName.innerHTML = 'Merhaba ' + `${sessionStorage.getItem("name") ? sessionStorage.getItem("name").toUpperCase() :'Ziyaretçi'}`;


window.addEventListener('load',() => {
  if(sessionStorage.getItem('name')){
    firstVisit.classList.add("d-none");


  }
})


// side bar kendim yptığım hali ama boostrap te offCanvas özelliği kullanıldı.
// const colAdd = document.querySelector('.colAdd')
// const filterNone = document.querySelector('.filterNone')
// function handleClose() {
//   filterNone.classList.add('d-none')
//   colAdd.classList.add('col-12')
// }



// function openFilter() {
//   filterNone.classList.remove('d-none')

//   colAdd.classList.remove('col-12')
  
// }