let mybutton = document.getElementById('myBtn');

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

window.onscroll = function() {
    scrollFunction();
}

mybutton.addEventListener("click", function topFucntion() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});