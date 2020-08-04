

$(".eat-burger").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id)
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
            devoured: 1
        }
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$("#add-button").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        burger_name: $("#addBurgerText").val(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});













