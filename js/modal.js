modal = () => {
    const modalBtn = document.querySelector('.modal__button');
    const courseBtn = document.querySelector('.course__button');
    const modal = document.querySelector('.modal ');
    const modalInner = document.querySelector('.modal__inner');

    const closeBtn = document.createElement('button');

    closeBtn.textContent = 'x';
    modalInner.prepend(closeBtn);
    modalInner.style.position = 'relative';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '10px';


    modalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    courseBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    modal.addEventListener('click', (event) => {
        if (!event.target.closest('.modal__inner')) {
            modal.style.display = '';
        }
    });

    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = '';

    })
}

modal()