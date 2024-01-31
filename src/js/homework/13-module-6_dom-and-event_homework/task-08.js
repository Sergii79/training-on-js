//* 1-й варіант:

// const registerForm = document.querySelector('.login-form');

// console.log(registerForm);

// const handleSubmit = event => {
//   event.preventDefault();

//   const form = event.target;
//   const email = form.elements.email.value;
//   const password = form.elements.password.value;

//   if (email === '' || password === '') {
//     return alert('Please fill in all the fields!');
//   }
//   form.reset();
// };

// registerForm.addEventListener('submit', handleSubmit);

//* 2-й варіант:

// const form = document.querySelector('.login-form');
// console.log(form);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === '' || password.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   console.log(`email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// form.addEventListener('submit', handleSubmit);

//* 3-й варіант:

const form = document.querySelector('.login-form');

const user = {
  email: '',
  password: '',
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('All fields are required!');
  }

  user.email = email.value;
  user.password = password.value;
  console.log(user);
  event.currentTarget.reset();
});
