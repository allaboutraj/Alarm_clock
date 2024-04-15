const currentTime = document.querySelector("h1");
const selectedMenu = document.querySelectorAll("select");
const setALarmButton = document.querySelector("button");
const content = document.querySelector(".content");
//For Hours
for(let i = 12; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let  option = `<option value="${i}">${i}</option>`;
    selectedMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

//For Minutes
for(let i = 59; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let  option = `<option value="${i}">${i}</option>`;
    selectedMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

//for Seconds
for(let i = 59; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let  option = `<option value="${i}">${i}</option>`;
    selectedMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

//For AM / PM
for(let i = 2; i > 0; i--){
    let pmam = i == 1 ? "AM" : "PM";
    let  option = `<option value="${pmam}">${pmam}</option>`;
    selectedMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    //getting hour, minutes and seconds
    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    pmam ="AM";

    if(h>=12){
        h = h - 12;
        pmam = "PM";
    }

    //If hour value 0, set this to 12
    h= h == 0 ? h = 12 : h ;

    //Before hour, minute ,sec add 0, if value < 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${pmam}`;
}, 1000);


function setAlarm(){
    let time = `${selectedMenu[0].value}:${selectedMenu[1].value}:${selectedMenu[2].value} ${selectedMenu[3].value}`;
    if(time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/PM")){
        return alert("Please select a valid time to set Alarm clock");
    }
    console.log(time);
}

setALarmButton.addEventListener("click", setAlarm)