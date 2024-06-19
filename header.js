
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
        } else {
        header.classList.remove('scrolled');
        }
    });