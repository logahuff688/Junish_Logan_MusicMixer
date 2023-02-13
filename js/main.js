console.log('Javascript is running!');

let icon1 = document.querySelector("#icon1") // icon1 variable
let icon2 = document.querySelector("#icon2") // icon2 variable
let icon3 = document.querySelector("#icon3") // icon3 variable
let icon4 = document.querySelector("#icon4") // icon4 variable
let icon5 = document.querySelector("#icon5") // icon5 variable
let icon6 = document.querySelector("#icon6") // icon6 variable
let icon7 = document.querySelector("#icon7") // icon7 variable
let icon8 = document.querySelector("#icon8") // icon8 variable
let icon9 = document.querySelector("#icon9") // icon9 variable
let icon10 = document.querySelector("#icon10") // icon10 variable



function logID() {
    console.log(this.id);
}

function logALT() {
console.log(this.alt); 
   
}

icon1.addEventListener('click',logID)
icon1.addEventListener('click',logALT)
icon2.addEventListener('click',logID)
icon2.addEventListener('click',logALT)
icon3.addEventListener('click',logID)
icon3.addEventListener('click',logALT)
icon4.addEventListener('click',logID)
icon4.addEventListener('click',logALT)
icon5.addEventListener('click',logID)
icon6.addEventListener('click',logALT)
icon7.addEventListener('click',logID)
icon7.addEventListener('click',logALT)
icon8.addEventListener('click',logID)
icon8.addEventListener('click',logALT)
icon9.addEventListener('click',logID)
icon9.addEventListener('click',logALT)
icon10.addEventListener('click',logID)
icon10.addEventListener('click',logALT)
