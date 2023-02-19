$("#currentDate").text(moment().format("dddd MMM Do"));

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
