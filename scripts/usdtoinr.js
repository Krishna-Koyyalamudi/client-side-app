function convertinr() {

    if (document.getElementById("c").value != " ") {
        let ci = parseInt(document.getElementById("c"));
        let d = ci * 1 * 72;
        document.getElementById("d").value = Math.round(f);
    } else {
        document.getElementById("d").value = "please enter the usd in above textbox";
    }
}
