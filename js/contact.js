/* ==========================================================================
   EduSphere — contact.html
   Author: Azamat Mustafin
   Bootstrap form validation (Assignment #3, Task 9). Moved out of the HTML
   into its own file in Assignment #5 (separation of HTML and JavaScript).
   ========================================================================== */

const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');

// on submit, add .was-validated so Bootstrap paints valid fields green and invalid ones red
form.addEventListener('submit', function (event) {
  event.preventDefault();               // demo site: nothing is really sent
  form.classList.add('was-validated');
  success.classList.toggle('d-none', !form.checkValidity());
  if (form.checkValidity()) {
    playSound('success');
  }
});

form.addEventListener('reset', function () {
  form.classList.remove('was-validated');
  success.classList.add('d-none');
});
