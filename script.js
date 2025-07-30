//wrapping the entire script with DOMContentLoadeed ensures JS runs after the entire HTML have been loaded
document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        event.preventDefault()

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        //validation variables
        let isValid = true;
        const messages = [];

        //username validation
        if(username.length < 3){
            isValid = false;
            messages.push('Username must be at least 3 characters long')
        }

        //email validation
        if(!email.includes('@') && !email.includes('.') ){
            isValid = false;
            messages.push('Email must include @ and .')
        }

        //password validation
        if(password.length < 8){
            isValid = false;
            messages.push('Password must be more than 8 characters long')
        }

        //display feedback outside all the if statement

        feedbackDiv.style.display = 'block';
        if(isValid){
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else{
            feedbackDiv.innerHTML = messages.join('<br>')
            feedbackDiv.style.color = '#dc3545'
        }
    } )
})