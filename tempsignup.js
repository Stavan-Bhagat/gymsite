document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const userdata = Object.fromEntries(formData.entries());
        
        console.log(formData);
        axios.post('http://localhost:3000/users', userdata)
        .then(response => {
  
            document.getElementById('response').textContent = 'Email submitted successfully!';
           
         event.target.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').textContent = 'An error occurred. Please try again later.';
        });
    });
  
  });
  