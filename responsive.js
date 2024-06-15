

window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    if (window.scrollY > 50) {
        menu.style.backgroundColor = 'rgba(33, 32, 32, 0.9)';
    } else {
        menu.style.backgroundColor = 'rgb(33, 32, 32)';
    }
});
