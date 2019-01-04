


document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



window.onscroll = (e) => {
    let scroll = window.scrollY;

    const header = document.querySelector('#navegacion-principal');
    if ( scroll > 300 ) {
        header.classList.add('bg-success');
    } else {
        header.classList.remove('bg-success');        
    }

};