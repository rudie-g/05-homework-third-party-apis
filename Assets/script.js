var theDate = moment().format("MMMM Do, YYYY");
var currentDate = $("#currentDay");
currentDate.text(theDate);

var theMainDiv = $("#mainContainer");
var saveButton = $(".saveBtn");
var inputField = $(".inputField");
var theHour = moment().format("HH");
if (theHour < 18) {
    $(inputField).attr("class", "col-10 inputField future");
    for (i = 0; i <= inputField.length; i++) {
        if (theHour-9 == i) {
            $(inputField[i]).attr("class", "col-10 inputField present")
        } else if (i > theHour-9) {
            $(inputField[i]).attr("class", "col-10 inputField future");
        } else if (i < theHour-9) {
            $(inputField[i]).attr("class", "col-10 inputField past");
        }
    } 
} else if (theHour >= 18) {
    $(inputField).attr("class", "col-10 inputField past");
}
function getEventText() {
    var eventText = $(this).prev().val();
    console.log($(this).prev().attr("id"))
    var eventID = $(this).prev().attr("id");
    localStorage.setItem('Event Note ' + eventID, eventText);
}
$('.saveBtn').on('click', getEventText);
$(function() {
    for (var i = 9; i < 18; i++) {
        var eventReturn = 'Event Note: event' + i + 'input'
        var eventSelector = '#event' + i + 'input'
        var setEventText = localStorage.getItem(eventReturn);
        $(eventSelector).text(setEventText);
    };
})