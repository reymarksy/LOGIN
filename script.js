const togglePassword = document.querySelector("#toggle-password");
        const passwordField = document.querySelector("#password");
        const repeatPasswordToggle = document.querySelector("#toggle-repeatpassword");
        const repeatPasswordField = document.querySelector("#repeatpassword");
        const form = document.querySelector("form");
    
        togglePassword.addEventListener("click", function () {
            const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
            passwordField.setAttribute("type", type);
            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
        });
    
        repeatPasswordToggle.addEventListener("click", function () {
            const type = repeatPasswordField.getAttribute("type") === "password" ? "text" : "password";
            repeatPasswordField.setAttribute("type", type);
            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
        });
    
        form.addEventListener("submit", function(event) {
            const password = passwordField.value;
            const repeatPassword = repeatPasswordField.value;
    
            if (password !== repeatPassword) {
                alert("Passwords do not match!");
                event.preventDefault(); 
            }
        });

        
        
        
        