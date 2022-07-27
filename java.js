var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(todayDate);

const currentHour = moment().hour();
console.log(moment().hour());

var hour7am = document.querySelector("#hour7");
var hour8am = document.querySelector("#hour8");
var hour9am = document.querySelector("#hour9");
var hour10am = document.querySelector("#hour10");
var hour11am = document.querySelector("#hour11");
var hour12pm = document.querySelector("#hour12");
var hour1pm = document.querySelector("#hour13");
var hour2pm = document.querySelector("#hour14");
var hour3pm = document.querySelector("#hour15");
var hour4pm = document.querySelector("#hour16");
var hour5pm = document.querySelector("#hour17");


if (currentHour === 7) {
    hour7am.setAttribute("style", "background-color: red");
} else if (currentHour < 7) {
    hour7am.setAttribute("style", "background-color: green");
} else {
    hour7am.setAttribute("style", "background-color: grey");
}


if (currentHour === 8) {
    hour8am.setAttribute("style", "background color: red");
} else if (currentHour < 8) {
    hour8am.setAttribute("style", "background-color: green");
} else {
    hour8am.setAttribute("style", "background-color: grey");
}



if (currentHour === 9) {
    hour9am.setAttribute("style", "background color: red");
} else if (currentHour < 9) {
    hour9am.setAttribute("style", "background-color: green");
} else {
    hour9am.setAttribute("style", "background-color: grey");
}


if (currentHour === 10) {
    hour10am.setAttribute("style", "background color: red");
} else if (currentHour < 10) {
    hour10am.setAttribute("style", "background-color: green");
} else {
    hour10am.setAttribute("style", "background-color: grey");
}


if (currentHour === 11) {
    hour11am.setAttribute("style", "background color: red");
} else if (currentHour < 11) {
    hour11am.setAttribute("style", "background-color: green");
} else {
    hour11am.setAttribute("style", "background-color: grey");
}


if (currentHour === 12) {
    hour12pm.setAttribute("style", "background color: red");
} else if (currentHour < 12) {
    hour12pm.setAttribute("style", "background-color: green");
} else {
    hour12pm.setAttribute("style", "background-color: grey");
}


if (currentHour === 13) {
    hour1pm.setAttribute("style", "background color: red");
} else if (currentHour < 13) {
    hour1pm.setAttribute("style", "background-color: green");
} else {
    hour1pm.setAttribute("style", "background-color: grey");
}


if (currentHour === 14) {
    hour2pm.setAttribute("style", "background color: red");
} else if (currentHour < 14) {
    hour2pm.setAttribute("style", "background-color: green");
} else {
    hour2pm.setAttribute("style", "background-color: grey");
}



if (currentHour === 15) {
  hour3pm.setAttribute("style", "background color: red");
} else if (currentHour < 15) {
    hour3pm.setAttribute("style", "background-color: green");
} else {
    hour3pm.setAttribute("style", "background-color: grey");
}



if (currentHour === 16) {
    hour4pm.setAttribute("style", "background color: red");
} else if (currentHour < 16) {
    hour4pm.setAttribute("style", "background-color: green");
} else {
    hour4pm.setAttribute("style", "background-color: grey");
}


if (currentHour === 17){
    hour5pm.setAttribute("style","background color: red");

} else if (currentHour < 17){
    hour5pm.setAttribute("style","background-color: green")

}else {
    hour5pm.setAttribute("style", "background-color: grey")
}
