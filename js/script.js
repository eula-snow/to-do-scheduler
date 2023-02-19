$("#currentDate").text(moment().format("dddd MMM Do")); //displays current date
let $addItem = $("#addItem");
let $main = $(".container");
let $textArea = $("textarea");

let startBusiness = moment(09, "H");
//function that creates a row for every hour from 9 to 5
$(document).ready(function () {
  while (startBusiness.hour() < 18) {
    addRow();
    console.log(startBusiness.hour());
    console.log(moment().hour());
    startBusiness.add(1, "hours");
    if (startBusiness.hour() === moment().hour()) {
      $textArea.css("background-color", "red");
      console.log(55);
    }
  }
});

//function that creates a row with time, text area, and button
function addRow() {
  $main.append(
    `<div class='row'>
      <div class='time'>${startBusiness.format("ha")}</div>
      <textarea class="past"></textarea>
      <button class='addItem'>
        <i class='fa-regular fa-floppy-disk'></i>
      </button>
    </div>`
  );
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
