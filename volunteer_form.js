const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const area_of_expertiseInput=document.getElementById('Area_of_expertise'); 
const hoursInput=document.getElementById('Hours');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const Area_of_expertise = area_of_expertiseInput.value.trim();
  const Hours = hoursInput.value.trim();

  // Validate name
  if (name === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  // Validate email
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Validate phone number
  if (!isValidPhoneNumber(phone)) {
    alert('Please enter a valid phone number.');
    phoneInput.focus();
    return;
  }

  // You can perform further actions here, like sending data to a server
  alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  const emailContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n Areaofexpertise: ${Area_of_expertise}\n Hours: ${Hours}`;
            
  window.open(`mailto:niharikaneha0604@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailContent)}`);
});

// Reset form fields
contactForm.addEventListener('reset', function () {
  // You can add additional reset actions here
});

// Helper function to validate email
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Helper function to validate phone number
function isValidPhoneNumber(phone) {
  const phonePattern = /^\d{10}$/; // Assuming a 10-digit phone number
  return phonePattern.test(phone);
}
