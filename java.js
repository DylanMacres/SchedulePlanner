
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(todayDate);

const currentHour = moment().hour();
console.log(moment().hour())

var hour9am = document.querySelector("#hour9")
if (currentHour === 9){
    hour9am.setAttribute("style","background color: red");

} else if (currentHour < 9){
    hour9am.setAttribute("style","background-color: green")

}else {
    hour9am.setAttribute("style", "background-color: grey")
}

