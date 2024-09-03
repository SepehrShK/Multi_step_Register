const register_text = document.querySelector('.register_text');
const topics = document.querySelector('.topics');
const summary_text = document.querySelector('.summary_text');

const form = document.querySelector('.form');
const form2 = document.querySelector('.form2');
const summary = document.querySelector('.summary');

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

const box_shadow1 = document.querySelector('.step1')
const box_shadow2 = document.querySelector('.step2')
const box_shadow3 = document.querySelector('.step3')


button1.addEventListener('click', function (e) {
    register_text.style.display = 'none';
    topics.style.display = 'block';

    form.style.display = 'none';
    form2.style.display = 'block';

    box_shadow1.style.boxShadow = 'none';
    box_shadow2.style.backgroundColor = '#652CD1';
    box_shadow2.style.boxShadow = '0 0 0 5px #845EEE33';

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

        box_shadow2.style.boxShadow = 'none';
        box_shadow3.style.backgroundColor = '#652CD1';
        box_shadow3.style.boxShadow = '0 0 0 5px #845EEE33';

        e.preventDefault();
    }
})