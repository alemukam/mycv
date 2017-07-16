// For the main Submit log + 2nd submit log

$("#submit-form").on("submit", function(event) {
	
	var login = $(this).find("input[name=login]").val().toLowerCase();
	var password = $(this).find("input[name=password]").val();

	if (login === "login" && password === "password") {
		$("#submit-form").attr("action", "cv.html");
		$("p").text();
	} else {
		event.preventDefault();
		$("p").text("Incorrect login or password. Please type again");
	}
});

$("input").focus(function() {
	$(this).css("outlineColor", "black");
});