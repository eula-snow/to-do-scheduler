$("#currentDate").text(moment().format("dddd MMM Do")); //displays current date
let $addItem = $("#addItem");
let $main = $(".container");
let startBusiness = moment(09, "H");
let index = 0;

//function that creates a row with time, text area, and save button
function addRow() {
  $main.append(
    `<div class='row'>
      <div class='time'>${startBusiness.format("ha")}</div>
      <textarea id="i${index}"></textarea>
      <button class='addItem'>
        <i class='fa-regular fa-floppy-disk'></i>
      </button>
    </div>`
  );
}

//function that creates a row for every hour from 9 to 5
$(document).ready(function () {
  while (startBusiness.hour() < 21) {
    addRow();
    colorUpdate();
    index++;
    // console.log(startBusiness.hour());
    // console.log(moment().hour());
    startBusiness.add(1, "hours");
  }
});

//function that updates textarea color
function colorUpdate() {
  const idQuery = "#i" + index.toString();
  // console.log(idQuery);
  if (startBusiness.hour() === moment().hour()) {
    $(idQuery).css("background-color", "#ff6961");
  } else if (startBusiness.hour() < moment().hour()) {
    $(idQuery).css("background-color", "gray");
  } else {
    $(idQuery).css("background-color", "#77dd77");
  }
}

// var $tasks = $("#tasks");

//add items to the list
// $(document).ready(function () {
//   $("#add").click(function () {
//     var newItem = $("#item").val();
//     $("ul").append(
//       "<li>" + newItem + "<button id='delete'>complete</button> </li>"
//     );
//     //clear input
//     $("#item").val("");
//   });
//   });
// });
