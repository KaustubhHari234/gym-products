function validateFullName(fullname) {
    if (fullname.trim() === "") {
        alert("Please enter your full name");
        return false;
    }
    var fullnameRegex = /^[a-zA-Z]+$/;

    if (!fullnameRegex.test(fullname)) {
        alert("Please enter a valid full name");
        return false;
    }

    return true;
}

function validateDOB(dob) {
    if (dob.trim() === "") {
        alert("Please enter your date of birth");
        return false;
    }
    var dobRegex = /^\d{4}-\d{2}-\d{2}$/;


    
    if (!dobRegex.test(dob)) {
        alert("Please enter a valid date of birth in dd/mm/yyyy format");
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (email.trim() === "") {
        alert("Please enter an email");
        return false;
    } else {
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email");
            return false;
        }
    }
    return true;
}

function validateMobile(mobile) {
    if (mobile.trim() === "") {
        alert("Please enter a mobile number");
        return false;
    } else {
        var mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number");
            return false;
        }
    }
    return true;
}

function validateUsername(username) {
    if (username.trim() === "") {
        alert("Please enter a username");
        return false;
    }

    var usernameRegex = /^[a-zA-Z0-9]{1,15}$/;

    if (!usernameRegex.test(username)) {
        alert("Username must contain a combination of only letters and numbers, and be less than 15 characters");
        return false;
    }

    return true;
}

function validatePassword(pass, confirmpass) {
    if (pass.trim() === "") {
        alert("Please enter a password");
        return false;
    }

    if (confirmpass.trim() === "") {
        alert("Please confirm your password");
        return false;
    }

    var uppercaseRegex = /[A-Z]/;
    var numberRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{2}/;
    var lenRegex = 10;

    if(pass.length < lenRegex){
        alert("Password must be atleast "+lenRegex+" characters long");
        return false;
    }
    
    if (!uppercaseRegex.test(pass)) {
        alert("Password must contain at least one uppercase letter");
        return false;
    }

    if (!numberRegex.test(pass)) {
        alert("Password must contain at least one number");
        return false;
    }

    if (!specialCharRegex.test(pass)) {
        alert("Password must contain at least TWO special character");
        return false;
    }

    if (pass !== confirmpass) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}


function validate() {
    var fullname = document.getElementById("fullname").value;
    var dob = document.getElementById("dob").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confirmpass").value;

    if (validateFullName(fullname) && 
        validateDOB(dob) && 
        validateUsername(username) && 
        validateEmail(email) && 
        validateMobile(mobile) && 
        validatePassword(pass, confirmpass)) {
            return true;
        }
    
    return false;
}