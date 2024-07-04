function handleRegister(event) {
    event.preventDefault();
    let user = document.getElementById("nam").value
    let pass = document.getElementById("pass").value


    if (user == "") {
        alert("please enter your name");
    }
    else if (pass == "") {
        alert("please enter your name");
    } else {
        var userDetails = {
            username: user,
            password: pass
        }
        console.log(userDetails);
    }

}