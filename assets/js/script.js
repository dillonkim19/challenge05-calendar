var container = $(".container");

var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentDate = moment();
console.log(currentDate);



for (var i = 0; i < hoursArray.length; i++){
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row time-block")
    
    var textbox = document.createElement("textarea");
    textbox.setAttribute("class", "col-md-10 description");

    var hour = document.createElement("div");
    hour.textContent = moment(hoursArray[i], 'HH').format('H A')
    hour.setAttribute("class", "col-md-1 hour")




    wrapper.appendChild(hour);
    wrapper.appendChild(textbox);
    container.append(wrapper);
}