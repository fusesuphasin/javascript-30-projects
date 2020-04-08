let parallaxImage = document.getElementById('ParallaxImage');
let parallaxContent = document.getElementById('ParallaxContent');
let windowScrolled;

window.addEventListener('scroll', function windowScroll() {
    windowScrolled = window.pageYOffset || this.document.documentElement.scrollTop;
    console.log(windowScrolled);
    parallaxImage.style.transform = `translate3d(0, ${windowScrolled / 3}px, 0)`; 
    parallaxContent.style.transform = `translate3d(0, ${windowScrolled / 6}px, 0)`; 
    console.log(parallaxImage.style.transform);
    console.log(parallaxContent.style.transform);
});