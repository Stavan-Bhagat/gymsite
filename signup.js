// Event listener for form submission
const form=document.getElementById('myForm');
form.addEventListener("submit",function(event){
  event.preventDefault();
if(validateInputs()){

  const formData = new FormData(event.target);
  const userdata = Object.fromEntries(formData.entries());

  axios.get('http://localhost:3000/users')
    .then(response => {
      const existingUsers = response.data;
      const emailExists = existingUsers.some(user => user.email === userdata.email);
      if (emailExists) {
        document.getElementById('response').textContent = 'Email already in use. Please use a different email address.';
      } else {
        axios.post('http://localhost:3000/users', userdata)
          .then(response => {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('signinbtn').style.display = 'block';
            
            event.target.reset();
            // window.location.href = "index.html";
          
          })
          .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').textContent = 'An error occurred. Please try again later.';
          });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('response').textContent = 'An error occurred while retrieving user data.';
    });
  }
});

function validateInputs() {
  const regex = /\d/;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const city = document.getElementById("city").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmpassword").value.trim();
  let isValid = true;

  if (name === "") {
    document.getElementById("sname").innerHTML = "Shouldn't be empty";
    isValid = false;
  } else if (regex.test(name)) {
    document.getElementById("sname").innerHTML = "Shouldn't contain digits";
    isValid = false;
  } else {
    document.getElementById("sname").innerHTML = "";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("semail").innerHTML = "Not a valid email ID";
    isValid = false;
  } else {
    document.getElementById("semail").innerHTML = "";
  }

  if (city === "") {
    document.getElementById("scity").innerHTML = "Shouldn't be empty";
    isValid = false;
  } else {
    document.getElementById("scity").innerHTML = "";
  }

  if (password === "") {
    document.getElementById("spassword").innerHTML = "Shouldn't be empty";
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById("spassword").innerHTML = "Should be at least 8 characters";
    isValid = false;
  } else {
    document.getElementById("spassword").innerHTML = "";
  }

  if (confirmPassword === "") {
    document.getElementById("sconfirmpassword").innerHTML = "Shouldn't be empty";
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("sconfirmpassword").innerHTML = "Passwords don't match";
    isValid = false;
  } else {
    document.getElementById("sconfirmpassword").innerHTML = "";
  }

  return isValid;
}


// function validateInputs(){
// const regex = /\d/;

//  const nameInput = document.getElementById("name");
//  const emailInput = document.getElementById("email");
//  const cityInput = document.getElementById("city");
//  const passwordInput = document.getElementById("password");
//  const confirmPasswordInput = document.getElementById("confirmpassword");


// // Event listener for name input
// nameInput.addEventListener('input', function() {
//   const name = nameInput.value.trim();
//   if (name === "") {
//     document.getElementById("sname").innerHTML = "Shouldn't be empty";
//   } else if (regex.test(name)) {
//     document.getElementById("sname").innerHTML = "Shouldn't contain digits";
//     console.log("digit");
//   } else {
//     document.getElementById("sname").innerHTML = "";
//   }
// });

// // Event listener for email input
// emailInput.addEventListener('input', function() {
//   const email = emailInput.value.trim();
//   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     document.getElementById("semail").innerHTML = "Not a valid email ID";
//   } else {
//     document.getElementById("semail").innerHTML = "";
//   }
// });

// // Event listener for city input
// cityInput.addEventListener('input', function() {
//   const city = cityInput.value.trim();
//   if (city === "") {
//     document.getElementById("scity").innerHTML = "Shouldn't be empty";
//   } else {
//     document.getElementById("scity").innerHTML = "";
//   }
// });

// // Event listener for password input
// passwordInput.addEventListener('input', function() {
//   const password = passwordInput.value.trim();
//   if (password === "") {
//     document.getElementById("spassword").innerHTML = "Shouldn't be empty";
//   } else if (password.length < 8) {
//     document.getElementById("spassword").innerHTML = "Should be at least 8 characters";
//   } else {
//     document.getElementById("spassword").innerHTML = "";
//   }
// });

// // Event listener for confirm password input
// confirmPasswordInput.addEventListener('input', function() {
//   const confirmPassword = confirmPasswordInput.value.trim();
//   const password = passwordInput.value.trim();
//   if (confirmPassword === "") {
//     document.getElementById("sconfirmpassword").innerHTML = "Shouldn't be empty";
//   } else if (password !== confirmPassword) {
//     document.getElementById("sconfirmpassword").innerHTML = "Passwords don't match";
//   } else {
//     document.getElementById("sconfirmpassword").innerHTML = "";
//   }
// });
// }

//  Function to clear error messages
// function clearErrors() {
//   const errorElements = document.querySelectorAll('.error');
//   errorElements.forEach(function(element) {
//       element.textContent = '';
//   });
// }














// form.addEventListener("submit",event=>{
//   event.preventDefault();
//   validateInputs();

//   const formData = new FormData(event.target);
//     const userdata = Object.fromEntries(formData.entries());

//     axios.get('http://localhost:3000/users')
//       .then(response => {
//         const existingUsers = response.data;
//         const emailExists = existingUsers.some(user => user.email === userdata.email);
//         if (emailExists) {
//           document.getElementById('response').textContent = 'Email already in use. Please use a different email address.';
//         } else {
//           axios.post('http://localhost:3000/users', userdata)
//             .then(response => {
//               document.getElementById('response').textContent = 'SignUp successfully!';
//               event.target.reset();
//               window.location.href="index.html";
//             })
//             .catch(error => {
//               console.error('Error:', error);
//               document.getElementById('response').textContent = 'An error occurred. Please try again later.';
//             });
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('response').textContent = 'An error occurred while retrieving user data.';
//       });

// });

// function  validateInputs(){
//  const nameInput = document.getElementById("name");
//  const emailInput = document.getElementById("email");
//  const cityInput = document.getElementById("city");
//  const passwordInput = document.getElementById("password");
//  const confirmPasswordInput = document.getElementById("confirmpassword");

//  clearErrors();

//    // Regular expression for checking digits
//    const regex = /\d/;
 
//   // Event listener for name input
//   nameInput.addEventListener('input', function() {
//     const name = nameInput.value.trim();
//     if (name === "") {
//       document.getElementById("sname").innerHTML = "Shouldn't be empty";
//     } else if (regex.test(name)) {
//       document.getElementById("sname").innerHTML = "Shouldn't contain digits";
//       console.log("digit");
//     } else {
//       document.getElementById("sname").innerHTML = "";
//     }
//   });

//   // Event listener for email input
//   emailInput.addEventListener('input', function() {
//     const email = emailInput.value.trim();
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       document.getElementById("semail").innerHTML = "Not a valid email ID";
//     } else {
//       document.getElementById("semail").innerHTML = "";
//     }
//   });

//   // Event listener for city input
//   cityInput.addEventListener('input', function() {
//     const city = cityInput.value.trim();
//     if (city === "") {
//       document.getElementById("scity").innerHTML = "Shouldn't be empty";
//     } else {
//       document.getElementById("scity").innerHTML = "";
//     }
//   });

//   // Event listener for password input
//   passwordInput.addEventListener('input', function() {
//     const password = passwordInput.value.trim();
//     if (password === "") {
//       document.getElementById("spassword").innerHTML = "Shouldn't be empty";
//     } else if (password.length < 8) {
//       document.getElementById("spassword").innerHTML = "Should be at least 8 characters";
//     } else {
//       document.getElementById("spassword").innerHTML = "";
//     }
//   });

//   // Event listener for confirm password input
//   confirmPasswordInput.addEventListener('input', function() {
//     const confirmPassword = confirmPasswordInput.value.trim();
//     const password = passwordInput.value.trim();
//     if (confirmPassword === "") {
//       document.getElementById("sconfirmpassword").innerHTML = "Shouldn't be empty";
//     } else if (password !== confirmPassword) {
//       document.getElementById("sconfirmpassword").innerHTML = "Passwords don't match";
//     } else {
//       document.getElementById("sconfirmpassword").innerHTML = "";
//     }
//   });

// }

// function clearErrors() {
//   const errorElements = document.querySelectorAll('.error');
//   errorElements.forEach(function(element) {
//       element.textContent = '';
//   });
// }

