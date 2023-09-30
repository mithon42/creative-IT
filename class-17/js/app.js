const closeBtn = document.getElementById('close');
const submitBtn = document.getElementById('submitBtn');
const container = document.getElementById('container');


// Close Button Function
closeBtn.addEventListener('click', function() {
   container.style.display = 'none'
})


// Input Validation Function
submitBtn.addEventListener('click', function(event) {
   event.preventDefault()

   // get the input field values
   const firstName = document.getElementById('firstName').value;
   const surName = document.getElementById('surName').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const female = document.getElementById('female').checked;
   const male = document.getElementById('male').checked;
   const custom = document.getElementById('custom').checked;

   // Name field required
   if(firstName.trim() === ''){
      alert('first name is required')
      return;
   }
   if(surName.trim() === ''){
      alert('sur name is required')
      return;
   }

   // Email field required
   if (!isValidEmail(email)) {
      alert('Please enter a valid email address')
      return;
   }

   // Password field required
   if(password === ''){
      alert('Please enter a password')
      return;
   }

   // Gender field required
   // if(female && male && custom){
   //    alert('Please select your gender')
   //    return;
   // }
   

   // form submit successfully messages
   alert('Form submitted successfully')
});



function isValidEmail(email){
   const emailPattern = / ^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\[a-zA-Z]{2,4}$/;

   return emailPattern.test(email);
};
