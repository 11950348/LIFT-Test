// Dark Mode SESSION Storage
$("#body, #sidebar").toggleClass(sessionStorage.toggled);

function darkLight() {
    /*DARK CLASS*/
    if (sessionStorage.toggled != "dark") {
        $("#body").toggleClass("dark", true);
        sessionStorage.toggled = "dark";
    } else {
        $("#body").toggleClass("dark", false);
        sessionStorage.toggled = "";
    }
}

/*Add 'checked' property to input if background == dark*/
if ($("#body").hasClass("dark")) {
    $("#checkBox").prop("checked", true);
} else {
    $("#checkBox").prop("checked", false);
}