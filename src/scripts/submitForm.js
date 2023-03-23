export function submitForm() {
    const input = document.querySelector('.sub-form__input');
    const button = document.querySelector('.sub-form__button');
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    button.addEventListener('click', (e) => {
        e.preventDefault();

        console.log(input.value);

        if (!validateInput(input.value)) {
            input.classList.add('sub-form__input--error');
            return;
        }

        input.value = '';
    })

    input.addEventListener('input', () => {
        if (input.classList.contains('sub-form__input--error')) {
            input.classList.remove('sub-form__input--error');
        }
    });

    function validateInput(value) {
        if (pattern.test(input.value)) {
            return true;
        }

        return false;
    }
}