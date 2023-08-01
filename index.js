if (window.location.href.includes('#')) {
    const form = document.querySelector('.form');
    form.classList.add('d-none');
    const afterHash = window.location.hash.split('#');
    const btn_warning2 = document.querySelector('.btn-warning2');
    btn_warning2.value = atob(afterHash[1]);
    const btn_primary = document.querySelector('.btn-primary');
    btn_primary.addEventListener('click', () => {
        window.location.href = window.location.origin;
    });
} else {
    const decrypted = document.querySelector('.decrypted');
    decrypted.classList.add('d-none');
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('#message-input');
        const form = document.querySelector('.form');
        form.classList.add('d-none');
        const link = document.querySelector('#div-link');
        link.classList.remove('d-none');
        const linkInput = document.querySelector('#link-input');
        const linkInputValue = (linkInput.value =
            window.location.origin +
            window.location.pathname +
            '#' +
            btoa(input.value));

        const button = document.querySelector('.btn-warning1');
        button.addEventListener('click', () => {
            let copyText = linkInputValue;
            navigator.clipboard.writeText(linkInputValue);
        });
    });
}
