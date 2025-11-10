const nav = document.querySelector('.header__nav');
const links = nav.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            seamless.scrollIntoView(section, {
                block: 'start',
                behavior: 'smooth',
                inline: 'center'
            })
        }
    })
})

