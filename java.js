document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) { 
       if(this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
             const targetId = this.getAttribute('href').substring(1); 
             document.getElementById(targetId).scrollIntoView({ 
               behavior: 'smooth' 
               }); 
               } }); 
               });

               function handleLogin() {
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                var password = document.getElementById('email').value;
                // Redirect with URL parameters
                window.location.href = 'landing.html?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + '&email=' + encodeURIComponent(email);
                return false; // Prevent form submission
            }

            document.querySelectorAll('nav a').forEach(anchor => {
              anchor.addEventListener('click', function(e) { 
                 if(this.getAttribute('href').startsWith("#")) {
                      e.preventDefault();
                       const targetId = this.getAttribute('href').substring(1); 
                       document.getElementById(targetId).scrollIntoView({ 
                         behavior: 'smooth' 
                         }); 
                         } }); 
                         }); 

                         
    // Cek apakah username tersimpan di localStorage
    const username = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).username : null;

    if (username) {
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.textContent = `Selamat datang, ${username}!`;
    }



                         