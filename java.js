
//set the current day and hour and make a variable for 
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(todayDate);

const currentHour = moment().hour();
console.log(moment().hour());

//set the save button class as a variable 
var saveButton = $(".saveBtn")




//Name the different hours as variables
const hour7am = document.querySelector("#hour7");
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


 //make variables that change when the hour changes using the moment library and repeat for all hours


 if (currentHour === 7) {
    hour7am.setAttribute("style", "background-color: red");
} else if (currentHour < 7) {
    hour7am.setAttribute("style", "background-color: green");
} else {
    hour7am.setAttribute("style", "background-color: grey");
}


if (currentHour === 8) {
    hour8am.setAttribute("style", "background-color: red");
} else if (currentHour < 8) {
    hour8am.setAttribute("style", "background-color: green");
} else {
    hour8am.setAttribute("style", "background-color: grey");
}



if (currentHour === 9) {
    hour9am.setAttribute("style", "background-color: red");
} else if (currentHour < 9) {
    hour9am.setAttribute("style", "background-color: green");
} else {
    hour9am.setAttribute("style", "background-color: grey");
}


if (currentHour === 10) {
    hour10am.setAttribute("style", "background-color: red");
} else if (currentHour < 10) {
    hour10am.setAttribute("style", "background-color: green");
} else {
    hour10am.setAttribute("style", "background-color: grey");
}


if (currentHour === 11) {
    hour11am.setAttribute("style", "background-color: red");
} else if (currentHour < 11) {
    hour11am.setAttribute("style", "background-color: green");
} else {
    hour11am.setAttribute("style", "background-color: grey");
}


if (currentHour === 12) {
    hour12pm.setAttribute("style", "background-color: red");
} else if (currentHour < 12) {
    hour12pm.setAttribute("style", "background-color: green");
} else {
    hour12pm.setAttribute("style", "background-color: grey");
}


if (currentHour === 13) {
    hour1pm.setAttribute("style", "background-color: red");
} else if (currentHour < 13) {
    hour1pm.setAttribute("style", "background-color: green");
} else {
    hour1pm.setAttribute("style", "background-color: grey");
}


if (currentHour === 14) {
    hour2pm.setAttribute("style", "background-color: red");
} else if (currentHour < 14) {
    hour2pm.setAttribute("style", "background-color: green");
} else {
    hour2pm.setAttribute("style", "background-color: grey");
}



if (currentHour === 15) {
  hour3pm.setAttribute("style", "background-color: red");
} else if (currentHour < 15) {
    hour3pm.setAttribute("style", "background-color: green");
} else {
    hour3pm.setAttribute("style", "background-color: grey");
}



if (currentHour === 16) {
    hour4pm.setAttribute("style", "background-color: red");
} else if (currentHour < 16) {
    hour4pm.setAttribute("style", "background-color: green");
} else {
    hour4pm.setAttribute("style", "background-color: grey");
}


if (currentHour === 17){
    hour5pm.setAttribute("style","background-color: red");

} else if (currentHour < 17){
    hour5pm.setAttribute("style","background-color: green")

}else {
    hour5pm.setAttribute("style", "background-color: grey")
}

//recieve the data from the localstorage to presist
function getData(){
    $("#hour7").text(localStorage.getItem("hour7am"))
    $("#hour8").text(localStorage.getItem("hour8am"))
    $("#hour9").text(localStorage.getItem("hour9am"))
    $("#hour10").text(localStorage.getItem("hour10am"))
    $("#hour11").text(localStorage.getItem("hour11am"))
    $("#hour12").text(localStorage.getItem("hour12pm"))
    $("#hour13").text(localStorage.getItem("hour1pm"))
    $("#hour14").text(localStorage.getItem("hour2pm"))
    $("#hour15").text(localStorage.getItem("hour3pm"))
    $("#hour16").text(localStorage.getItem("hour4pm"))
    $("#hour17").text(localStorage.getItem("hour5pm"))

};

getData();

//have the save button save the data
$(saveButton).on("click", function(event){
   var userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    var time = $(this).parent().attr("id");
    console.log(time)
    localStorage.setItem(time, userInput);
    localStorage.getItem(time, userInput)
    getData();
})





