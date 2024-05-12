let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        let menu = listElement.nextElementSibling;
        let isOpen = menu.classList.contains('fle');

        if (isOpen) {
            // Cerrar la lista
            menu.style.height = '0px';
            menu.classList.remove('fle');
        } else {
            // Abrir la lista
            menu.style.height = `${menu.scrollHeight}px`;
            menu.classList.add('fle');
        }
    });
});

