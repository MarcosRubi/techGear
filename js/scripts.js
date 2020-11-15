window.sr = ScrollReveal();
sr.reveal('.toTop', {
    duration: 2000,
    origin: 'top',
    distance: '100px'
});
sr.reveal('.toLeft', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.toRight', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.toBottom', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('.reveal', {
    duration: 2000,
    origin: 'bottom'
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(window).scroll(function () {
    //MENU
    var scroll = $(window).scrollTop();
    const menu = $('#menu');

    if (scroll > 10) {
        menu.addClass(" bg-secondary py-2");
        menu.removeClass(" bg-dark py-4");
    } else {
        menu.addClass("bg-dark py-4");
        menu.removeClass("bg-secondary py-2");
    }
});
