var container = $(".container");
var currentDay = $("#currentDay");

var hoursArray = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
var numberToWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var textArray;

if (JSON.parse(localStorage.getItem("textArray") === null)){
    textArray = Array(hoursArray.length).fill('');
    localStorage.setItem("textArray", JSON.stringify(textArray))
} else {
    textArray = JSON.parse(localStorage.getItem("textArray"));
}
// console.log(textArray);

var current = moment();
// console.log(current);

// return past present or future after comparing with current time
function compareHour(hour) {
    // console.log(current.hour())
    if (current.hour() > hour) {
        return "past";
    } else if (current.hour() === hour) {
        return "present";
    } else {
        return "future";
    }
}

function saveData(index) {
    textArray = JSON.parse(localStorage.getItem("textArray"));
    // console.log(index)
    // console.log(textArray)
    var textId = "#" + numberToWord[index];
    // console.log(textId);
    // console.log($(textId).val());
    textArray[index] = $(textId).val();
    // console.log(textArray);
    localStorage.setItem("textArray", JSON.stringify(textArray));
}

//add current day to page
currentDay.text(moment().format('dddd, MMMM Do YYYY'))

// make table with columsn of hour, text, save button, etc
for (var i = 0; i < hoursArray.length; i++){
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row time-block")
    
    // console.log(compareHour(hoursArray[i])); //get past, present, or future
    wrapper.classList.add(compareHour(hoursArray[i]));
    
    var hour = document.createElement("div");
    hour.textContent = moment(hoursArray[i], 'HH').format('H A')
    hour.setAttribute("class", "col-md-1 hour")

    var textbox = document.createElement("textarea");
    textbox.setAttribute("class", "col-md-10 description");
    textbox.setAttribute("id", numberToWord[i])
    textbox.textContent = textArray[i];

    var saveButton = document.createElement("i");
    saveButton.setAttribute("class", "col-md-1 fas fa-save saveBtn");
    
    saveButton.addEventListener("click", saveData.bind(this, i));

    container.append(wrapper);
    wrapper.appendChild(hour);
    wrapper.appendChild(textbox);
    wrapper.appendChild(saveButton);
}