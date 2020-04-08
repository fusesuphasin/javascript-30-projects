var wHeight = window.innerHeight;
var sb = document.getElementById('search-button');
var closeSB = document.getElementById('fullscreen-close-button');
var SearchOverlay = document.getElementById('search-overlay');
var searchBar = document.getElementById('fullscreen-searchform');

searchBar.style.top = wHeight / 2 + 'px';
window.addEventListener('resize', function() {
    console.log(wHeight);
    wHeight = window.innerHeight;
    searchBar.style.top = wHeight / 2 + 'px';
}, true);

document.addEventListener('click', function() {
    sb.onclick = function() {
        SearchOverlay.classList.add('fullscreen-search-overlay-show');
    };

    closeSB.onclick = function() {
        SearchOverlay.classList.remove('fullscreen-search-overlay-show');
    }
})