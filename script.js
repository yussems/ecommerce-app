const firstVisit = document.querySelector(".first-Visit");
const aa = document.querySelector(".aa");

let val = false
aa.addEventListener('click',(e) => {
    val = true
    firstVisit.classList.add('d-none') 
    
    localStorage.setItem('auth', val);

})

console.log(val);
if(localStorage.getItem('auth')){
    firstVisit.classList.add('d-none') 

}


