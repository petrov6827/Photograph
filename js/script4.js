function val() {
    var uname = document.getElementById('username').value;
    if (!uname) {
        e.eventPreventDefault()
        document.getElementById("error").innerHTML = "Enter a username";
        return false;
    }
    else {
        return true;
    }
}