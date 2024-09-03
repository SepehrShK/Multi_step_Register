const register_text = document.querySelector('.register_text');
const topics = document.querySelector('.topics');
const summary_text = document.querySelector('.summary_text');

const form = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
const summary = document.querySelector('.summary');

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

const box_shadow1 = document.querySelector('.step1')
const box_shadow2 = document.querySelector('.step2')
const box_shadow3 = document.querySelector('.step3')


button1.addEventListener('click', function (e) {
    const name = document.querySelectorAll('.form1 input')[0];
    const email = document.querySelectorAll('.form1 input')[1];

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name.value.trim() || !email.value.trim()) {
        alert('Please fill in both your name and email.');
        e.preventDefault();
    } else if (!emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    } else {
        const putName = document.querySelector(' .name_text')
        const putEmail = document.querySelector(' .email_text')
        putName.textContent = name.value
        putEmail.textContent = email.value
        
        register_text.style.display = 'none';
        form.style.display = 'none';

        topics.style.display = 'block';
        form2.style.display = 'block';

        box_shadow1.style.boxShadow = 'none';
        box_shadow2.style.backgroundColor = '#652CD1';
        box_shadow2.style.boxShadow = '0 0 0 5px #845EEE33';

        e.preventDefault();
    }
})

button2.addEventListener('click', function (e) {

    const checkboxes = document.querySelectorAll('input[name="topic"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
    if (!isChecked) {
        alert('Please select at least one option.');
        e.preventDefault();
    } else {
        const option1 = document.querySelectorAll('.form2 input')[0];
        const option2 = document.querySelectorAll('.form2 input')[1];
        const option3 = document.querySelectorAll('.form2 input')[2];

        const topic = document.querySelectorAll('.topic_text');

        if (option1.checked) {
            topic[0].innerHTML += `. ${option1.value}`;
        }
        if (option2.checked) {
            topic[1].innerHTML += `. ${option2.value}`;
        }
        if (option3.checked) {
            topic[2].innerHTML += `. ${option3.value}`;
        }

        topics.style.display = 'none';
        form2.style.display = 'none';

        summary_text.style.display = 'block';
        summary.style.display = 'block';

        box_shadow2.style.boxShadow = 'none';
        box_shadow3.style.backgroundColor = '#652CD1';
        box_shadow3.style.boxShadow = '0 0 0 5px #845EEE33';

        e.preventDefault();
    }
})

button3.addEventListener('click', function (e) {
    alert('Success');
})