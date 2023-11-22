$(document).ready(function() {
    $("#submitBtn").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "save_data.php",
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function(response) {
                alert(response);
                // You can add more handling here, such as updating the UI or redirecting the user.
            }
        });
    });
});
