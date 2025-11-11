const accordeon = () => {
    const contents = document.querySelectorAll('.program-line__content');

    contents.forEach(element => {
        const title = element.querySelector('.program-line__title');
        const descr = element.querySelector('.program-line__descr');

        title.addEventListener('click', () => {
            descr.classList.toggle('active');

            contents.forEach(el => {
                const d = el.querySelector('.program-line__descr');
                if (d != descr) { d.classList.remove('active') }
            })


        })

    })
}

accordeon()