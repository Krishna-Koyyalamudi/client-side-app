function convertinr() {

    if (document.getElementById("c").value != " ") {
        var f = document.getElementById("c").value * 72;
        document.getElementById("d").value = Math.round(f);
    } else {
        document.getElementById("d").value = "please enter the usd in above textbox";
    }
}
