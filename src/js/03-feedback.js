import throttle from 'lodash.throttle'

const formEl = document.querySelector('.feedback-form');
const FORM_LOCAL_STORAGE_KEY = "feedback-form-state";
const formData = {};

formEl.addEventListener('submit', handleFofmSubmit)
formEl.addEventListener('input', throttle(getFormData, 500));

function getFormData(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FORM_LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function handleFofmSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(FORM_LOCAL_STORAGE_KEY)
  console.log(formData)
}

function populateTextValue() {
  let savedMessage = JSON.parse(localStorage.getItem(FORM_LOCAL_STORAGE_KEY));

  if (savedMessage) {
    formEl.email.value = savedMessage.email || '';
    formEl.message.value = savedMessage.message || '';
  }
  console.log(formEl.email.value)
}


populateTextValue()