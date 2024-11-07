interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;
if (!$contactForm) throw new Error('$contactForm does not exist');

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formData);
  $contactForm.reset();
});
