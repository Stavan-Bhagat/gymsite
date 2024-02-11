
    document.getElementById('signIn').addEventListener('submit', function (event) {
        event.preventDefault();

      
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

      
        axios.get(`http://localhost:3000/users?email=${email}`)

            .then(response => {

                const userData = response.data[0]; 
        

                console.log(userData);
        

                if (userData && userData.password === password) {

                    window.location.href="gymsite.html";
                    // document.getElementById('name').textContent = userData.name;
                    // document.getElementById('emaill').textContent = userData.email;
               
                } else {
                  
                     document.getElementById('errormsg').textContent = 'Invalid email or password. Please try again.';
                }

             
                event.target.reset();
            })
            .catch(error => {
                console.error('Error:', error);
               
                document.getElementById('errormsg').textContent = 'An error occurred. Please try again later.';
            });
    });

