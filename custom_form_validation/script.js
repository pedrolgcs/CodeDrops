const fields = document.querySelectorAll('[required]');

function customValidation(event) {
  event.preventDefault();
  const field = event.target;
  
  function verifyErrors() {
    let foundError = false;
  
    for (let error in field.validity) {
      if (field.validity[error] && !field.validity.valid) {
        foundError = error;
      }
    }

    return foundError;
  }

  const error = verifyErrors();

  const spanError = field.parentNode.querySelector('span.error');

  if (error) {
    spanError.classList.add('active');
    spanError.innerHTML = 'required field';
  } else {
    spanError.classList.remove('active');
    spanError.innerHTML = '';
  }

}

for (field of fields) {
  field.addEventListener('invalid', customValidation);
  field.addEventListener('blur', customValidation);
}

document.querySelector('form').addEventListener('submit', (event) => {
  console.log('Enviar o formulario');
  event.preventDefault();
})
