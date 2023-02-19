$("#currentDate").text(moment().format("dddd MMM Do")); //displays current date

let startBusiness = moment(09, "HH");
while (startBusiness.hour() < 18) {
  console.log(startBusiness.format("hha"));
  startBusiness.add(1, "hours");
}

// var $addItem = $("#addItem");
// var $tasks = $("#tasks");

//add items to the list
$(document).ready(function () {
  $("#add").click(function () {
    var newItem = $("#item").val();
    $("ul").append(
      "<li>" + newItem + "<button id='delete'>complete</button> </li>"
    );
    //clear input
    $("#item").val("");
  });
  //add items using Enter
  //   $("#item").keyup(function (e) {
  //     if (e.keyCode === 13) {
  //       ;
  //     }
  //   });
});

//delete items
$("#delete").on("click", function () {
  var $parent = $(this).parent();
  $parent.remove();
});
