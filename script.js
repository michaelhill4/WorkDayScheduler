// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



// displays the current time in jumbotron
var currentTime = moment().format("ddd MMM Do, YYYY HH:mm");
console.log(currentTime)
$('#currentDay').text(currentTime);

// makes an array of elements with the class name "saveBtn"
var buttonSave = document.getElementsByClassName("saveBtn")
console.log(buttonSave);

// makes an array of elements with the name timeData
var textArea = document.getElementsByClassName("timeData")

// for loop to loop over the array of buttons
for (let i = 0; i < buttonSave.length; i++) {

    // adding an eventListner to each button in the button array
    buttonSave[i].addEventListener("click", () => {
        console.log("tacos")
        console.log(textArea[i].value)
        //    saving the value of the text area to local storage
        localStorage.setItem(i, textArea[i].value)
    })
    console.log(localStorage.getItem(i))
    // redefining the value of the text area that we saved in local storage 
    textArea[i].value = localStorage.getItem(i)
    console.log(textArea[i])
}

// targets each time bloc eventually
for (let i = 0; i < textArea.length; i++) {
    console.log(textArea[i] && moment().format("H"))
    if (textArea[i].getAttribute("data-hour") === moment().format("H")) { 
        textArea[i].setAttribute('class', 'timeData present col-8')


    } else if (textArea[i].getAttribute("data-hour") < moment().format("H")) {
         
            textArea[i].setAttribute('class', 'timeData past col-8')
    } 
    else {textArea[i].setAttribute('class', 'timeData future col-8')}

}


console.log(moment().format("H"))
