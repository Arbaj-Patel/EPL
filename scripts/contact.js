src="https://cdn.emailjs.com/dist/email.min.js"
 src="https://cdn.emailjs.com/dist/email.min.js"

  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your EmailJS Public Key
  const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your EmailJS Service ID
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your EmailJS Template ID

  emailjs.init(PUBLIC_KEY);

  const form = document.getElementById('contactForm');
  const submitBtn = form.querySelector('.submit-btn');
  const responseDiv = document.getElementById('formResponse');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    responseDiv.textContent = '';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
      .then(() => {
        responseDiv.textContent = 'Message sent successfully!';
        responseDiv.style.color = 'green';
        form.reset();
      })
      .catch(() => {
        responseDiv.textContent = 'EmailJS failed, sending via backup...';
        responseDiv.style.color = 'orange';

        // Create form data object for fetch
        const formData = new FormData(form);
        formData.append('_subject', 'New Contact Form Submission');
        formData.append('_template', 'box');
        formData.append('_captcha', 'false');

        fetch('https://formsubmit.co/ajax/dhakanegorakash7741@gmail.com', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          responseDiv.textContent = 'Message sent via backup successfully!';
          responseDiv.style.color = 'green';
          form.reset();
        })
        .catch(() => {
          responseDiv.textContent = 'Both methods failed. Please try again later.';
          responseDiv.style.color = 'red';
        });
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
  });