function convertinr() {

    if (document.getElementById("c").value != " ") {
        let ci = parseInt(document.getElementById("c"));
        let d = ci * 1 * 72;
        parseInt(document.getElementById("d")) = Math.round(d);
    } else {
        document.getElementById("d").value = "please enter the usd in above textbox";
    }
}
