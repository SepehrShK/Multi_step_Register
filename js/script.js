const register_text = document.querySelector('.register_text');
const topics = document.querySelector('.topics');
const summary_text = document.querySelector('.summary_text');

const form = document.querySelector('.form');
const form2 = document.querySelector('.form2');
const summary = document.querySelector('.summary');

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');


button1.addEventListener('click', function (e) {
    register_text.style.display = 'none';
    topics.style.display = 'block';

    form.style.display = 'none';
    form2.style.display = 'block';

    e.preventDefault();
})

button2.addEventListener('click', function (e) {

    const checkboxes = document.querySelectorAll('input[name="topic"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
    if (!isChecked) {
        alert('Please select at least one option.');
        e.preventDefault();
    } else {
        topics.style.display = 'none';
        summary_text.style.display = 'block';

        form2.style.display = 'none';
        summary.style.display = 'block';

        e.preventDefault();
    }
})

// function validateCheckboxes() {
//     const checkboxes = document.querySelectorAll('input[name="topic"]');
//     const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
//     if (!isChecked) {
//         alert('Please select at least one option.');
//         return false
//     }
//     return true;
// }

