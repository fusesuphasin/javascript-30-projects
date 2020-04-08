let ham = document.getElementById('hamburger');
let ul = document.getElementById('menu');

ham.addEventListener("click", function() {
    ul.classList.toggle("open");
});


function changeHam(ham) {
    ham.classList.toggle('change');
}