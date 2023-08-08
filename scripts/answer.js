// Get the current date
var now = new Date();
var dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
var hour = now.getHours(); // 0 to 23

// Determine the message based on the day of the week
var answer = "no";
var subanswer;

var isEventSoon = true;
var isEventToday = false;
var isEventSpecial = false;

isEventToday = now.getDay() == "Saturday";

if (!isEventSoon) {
    subanswer = "not even this weekend";
} else if (isEventToday) {
    if (isEventSpecial) {
        answer = "yes!";
        subanswer = "and this one is special";
    } else {
        answer = "yes";
        subanswer = "we start at 7";
    }
} else {
    if (isEventSpecial) {
        subanswer = "but something special is coming";
    } else {
        subanswer = "but there will be saturday";
    }
}

// Combine the messages and display them
document.getElementById('main-answer').textContent = answer;
document.getElementById('sub-answer').textContent = subanswer;

