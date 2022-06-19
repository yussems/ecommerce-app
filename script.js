const firstVisit = document.querySelector(".first-Visit");
const formVal = document.querySelector(".formVal");
const localInput = document.querySelector(".localInput");
const userName = document.querySelector(".userName");

formVal.addEventListener("submit", (e) => {
    e.preventDefault();
  const name = localInput.value;
  localStorage.setItem("name", name);
  firstVisit.style.display = "none";
   window.location.reload();
});

function checkVisiter() {
    if (localStorage.getItem("name") === null) {
      firstVisit.classList.add('d-block')
    }else{
        
        firstVisit.classList.add('d-none')
    }

}
checkVisiter()

function setName() {
    if(localStorage.getItem("name") === ''){
        userName.innerHTML = 'Ziyaretçi'
    }
    const name = localStorage.getItem("name");
    userName.innerHTML = `Merhaba ${name.toUpperCase()}`;
}
setName()
