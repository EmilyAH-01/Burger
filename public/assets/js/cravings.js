// AJAX PUT and POST requests, triggered upon "I've eaten it!" button click
// *** Refactored from previous MSU Coding Bootcamp activity

$(function() {
  $(".change-eat-status").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");

    var newEatState = {
      devoured: newEat
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      food_name: $("#burg").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

});
