const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';


let formData = {
  email: '',
  message: '',
};


const savedData = localStorage.getItem(storageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}


form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
});


form.addEventListener('submit', (event) => {
  event.preventDefault();


  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);


  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
  form.reset();
});

