const form = document.querySelector('form');
const name = document.getElementById('Name');
const subject = document.getElementById('Subject');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const mess = document.getElementById('message');

function sendEmail() {
  const bodyMessage = `
  name: ${name.value} <br>
  email: ${email.value} <br> 
  mobile: ${mobile.value} <br>
  message: ${mess.value}`;

  Email.send({
    SecureToken: '7f445c17-87ec-4ab5-9b59-a8e651182ee8',
    Host: 'smtp.elasticemail.com',
    Username: 'willyrandika0603@gmail.com',
    Password: 'A69B8BF59302163596E498B5A48E6A12918A',
    To: 'willyrandika0603@gmail.com',
    From: 'willyrandika0603@gmail.com',
    Subject: subject.value,
    Body: bodyMessage
  }).then(message => {
    if (message === 'OK') {
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again later.',
        icon: 'error'
      });
    }
  });
}

function checkInput() {
  const items = document.querySelectorAll('.item');

  for (const item of items) {
    if (item.value.trim() === '') {
      item.classList.add('error');
      item.parentElement.classList.add('error');
    } else {
      item.classList.remove('error');
      item.parentElement.classList.remove('error');
    }
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.=]+)@([a-z\d=]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTextEmail = document.querySelector('.error-text.email');

  if (!email.value.match(emailRegex)) {
    email.classList.add('error');
    email.parentElement.classList.add('error');

    if (email.value.trim() !== '') {
      errorTextEmail.innerText = 'Isi dengan email yang valid';
    } else {
      errorTextEmail.innerText = 'Email tidak boleh kosong';
    }
  } else {
    email.classList.remove('error');
    email.parentElement.classList.remove('error');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();

  if (!name.classList.contains('error') && !email.classList.contains('error') && !mobile.classList.contains('error') && !subject.classList.contains('error') && !mess.classList.contains('error')) {
    sendEmail();
    form.reset();
  }
});

