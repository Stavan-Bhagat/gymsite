document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signIn').addEventListener('submit', function (event) {
        event.preventDefault();

        // Extracting user input from the sign-in form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Making a GET request to authenticate user
        axios.get(`http://localhost:3000/users?email=${email}`)

            .then(response => {
                const userData = response.data[0]; // Assuming email is unique and returns only one user
        

                console.log(userData);
        

                if (userData && userData.password === password) {
                    // Password matches, user authenticated
                    document.getElementById('name').textContent = userData.name;
                    document.getElementById('emaill').textContent = userData.email;
                    // document.getElementById('response').textContent = 'Login successful!';
                } else {
                    // Invalid email or password
                    // document.getElementById('response').textContent = 'Invalid email or password. Please try again.';
                }

                // Resetting the sign-in form
                event.target.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                // Displaying error message on the UI
                // document.getElementById('response').textContent = 'An error occurred. Please try again later.';
            });
    });
});
