fetch("../data/users.json")
    .then(response => response.json())
    .then(users => {

        function loginUser() {

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            let found = users.find(user =>
                user.username === username &&
                user.password === password
            );

            if (found) {
                alert("Login successful!");
            } else {
                alert("Wrong username or password!");
            }
        }

        window.loginUser = loginUser;
    });