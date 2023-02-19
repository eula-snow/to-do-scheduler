let $main = $(".container");
let startBusiness = moment(09, "H");
//let index = 0;
$("#currentDate").text(moment().format("dddd MMM Do")); //displays current date

//function that creates a row with time, text area, and save button
function addRow(index) {
  $main.append(
    `<div class='row'>
      <div class='time'>${startBusiness.format("ha")}</div>
      <textarea id="i${index}"></textarea>
      <button class='addItem' id="b${index}">
        <i class='fa-regular fa-floppy-disk'></i>
      </button>
    </div>`
  );
}

//function that creates a row for every hour from 9 to 5
$(document).ready(function () {
  let index = 0;
  while (startBusiness.hour() < 18) {
    addRow(index);
    colorUpdate(index);
    addTask(index);
    getTask(index);
    index++;
    // console.log(startBusiness.hour());
    // console.log(moment().hour());
    startBusiness.add(1, "hours"); //adds an hour
  }
});

//function that updates textarea color
function colorUpdate(index) {
  const idText = "#i" + index.toString(); //id of textarea
  // console.log(idText);
  if (startBusiness.hour() === moment().hour()) {
    $(idText).css("background-color", "#ff6961");
  } else if (startBusiness.hour() < moment().hour()) {
    $(idText).css("background-color", "gray");
  } else {
    $(idText).css("background-color", "#77dd77");
  }
}

//functon to add tasks to localStorage when button is clicked
function addTask(index) {
  const idButton = "#b" + index.toString(); //id of button
  const idText = "#i" + index.toString();
  $(idButton).click(function () {
    $("#alert").show().delay(500).fadeOut();
    var task = $(idText).val(); // gets text from textarea
    //console.log(task);
    localStorage.setItem("key" + index.toString(), task);
  });
}

//function to get tasks from localStorage
function getTask(index) {
  const idText = "#i" + index.toString();
  const item = localStorage.getItem("key" + index.toString());
  if (item) {
    $(idText).text(item); //updates text in textarea
  }
}
