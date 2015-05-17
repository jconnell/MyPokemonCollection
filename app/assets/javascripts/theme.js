function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#password-confirm").val();
    if (password != confirmPassword) {
	$("#password-confirm-label").attr('class', 'login-field-icon fui-cross');
    } else {
	$("#password-confirm-label").attr('class', 'login-field-icon fui-check');
    }
}

$(document).ready(function() {
    $(function () {
	// Checkboxes and Radio buttons
	$(':checkbox').radiocheck();
	$('[data-toggle="checkbox"]').radiocheck();
	$('[data-toggle="radio"]').radiocheck();
	// Password match
	$("#password-confirm").keyup(checkPasswordMatch);
    });
});
