/*const convertinr = (c) => { return x }*/

function convertinr() {

    if (document.getElementById("c").value != " ") {
        var f = document.getElementById("c").value * 1 * 72;
        localStorage.setItem("m",document.getElementById("c").value);
        document.getElementById("d").value = Math.round(f);
    } else {
        document.getElementById("d").value = "please enter the usd in above textbox";
    }
}
document.getElementById("c").value = localStorage.getItem("m");

const updateWithJoke = async (event) => {
    document.querySelector('#result').innerHTML = ''
    const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
    const response = await fetch(url)
    const obj = await response.json()
    const joke = obj.value.joke || 'No joke for you.';
    document.querySelector('#result').innerHTML = joke
  }

  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  });
