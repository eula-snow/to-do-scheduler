$("#currentDate").text(moment().format("dddd MMM Do")); //displays current date
let $addItem = $("#addItem");
let $main = $(".container");
let startBusiness = moment(09, "H");
//let index = 0;

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
    index++;
    // console.log(startBusiness.hour());
    // console.log(moment().hour());
    startBusiness.add(1, "hours");
  }
});

//function that updates textarea color
function colorUpdate(index) {
  const idText = "#i" + index.toString();
  // console.log(idQuery);
  if (startBusiness.hour() === moment().hour()) {
    $(idText).css("background-color", "#ff6961");
  } else if (startBusiness.hour() < moment().hour()) {
    $(idText).css("background-color", "gray");
  } else {
    $(idText).css("background-color", "#77dd77");
  }
}

//functon to add tasks to localStorage
function addTask(index) {
  const idButton = "#b" + index.toString();
  const idText = "#i" + index.toString();
  const i = index;
  $(idButton).click(function () {
    var task = $(idText).val();
    console.log(task);
    localStorage.setItem("key" + i.toString(), task);
  });
}

//function to get tasks from localStorage
function getTask() {}
