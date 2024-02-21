document.getElementById("myForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Validate firstname
    const firstname = document.getElementById("firstname").value.trim();
    if (firstname === "") {
    document.getElementById("firstnameError").innerText = "Please enter your firstname";
    isValid = false;    
    } else {
    document.getElementById("firstnameError").innerText = "";
    }


    // Validate lastname
    const lastname = document.getElementById("lastname").value.trim();
    if (lastname === "") {
    document.getElementById("lastnameError").innerText = "Please enter your lastname";
    isValid = false;
    } else {
    document.getElementById("lastnameError").innerText = "";
    }


    // Validate phonenumber
    const phonenumber = document.getElementById("phonenumber").value.trim();
    if (phonenumber === "") {
    document.getElementById("phonenumberError").innerText = "Please enter a phonenumber";
    isValid = false;
    } else {
    document.getElementById("phonenumberError").innerText = "";
    }


    // Validate Email
    const email = document.getElementById("email").value;
    if (!email.includes('@')) {
        document.getElementById("emailError").innerText = "Please enter a valid email";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Validate location
    const location = document.getElementById("location").value.trim();
    if (location === "") {
        document.getElementById("locationError").innerText = "Please enter a location address";
        isValid = false;
    } else {
        document.getElementById("locationError").innerText = "";
    }



    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
});

document.getElementById("farmer").addEventListener("submit", function(event) {
    let isValid = true;

    // Validate firstname
    const firstname = document.getElementById("firstnamefarmer").value.trim();
    if (firstname === "") {
        document.getElementById("firstnamefarmerError").innerText = "Please enter your firstname";
        isValid = false;    
    } else {
        document.getElementById("firstnamefarmerError").innerText = "";
    }

    // Validate lastname
    const lastname = document.getElementById("lastnamefarmer").value.trim();
    if (lastname === "") {
        document.getElementById("lastnamefarmerError").innerText = "Please enter your lastname";
        isValid = false;
    } else {
        document.getElementById("lastnamefarmerError").innerText = "";
    }

    // Validate phonenumber
    const phonenumber = document.getElementById("phonenumberfarmer").value.trim();
    if (phonenumber === "") {
        document.getElementById("phonenumberfarmerError").innerText = "Please enter a phonenumber";
        isValid = false;
    } else {
        document.getElementById("phonenumberfarmerError").innerText = "";
    }

    // Validate Email
    const email = document.getElementById("email").value;
    if (!email.includes('@')) {
        document.getElementById("emailfarmerError").innerText = "Please enter a valid email";
        isValid = false;
    } else {
        document.getElementById("emailfarmerError").innerText = "";
    }

    // Validate location
    const location = document.getElementById("locationfarmer").value.trim();
    if (location === "") {
        document.getElementById("locationfarmerError").innerText = "Please enter a location address";
        isValid = false;
    } else {
        document.getElementById("locationfarmerError").innerText = "";
    }

    // Validate county
    const county = document.getElementById("county").value.trim();
    if (county === "") {
        document.getElementById("regionError").innerText = "Please select a county";
        isValid = false;
    } else {
        document.getElementById("regionError").innerText = "";
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
});


document.getElementById("login").addEventListener("submit", function(event) {
    let isValid = true;

    const email = document.getElementById("emaillogin").value;
    if (!email.includes('@')) {
        document.getElementById("emailloginError").innerText = "Please enter a valid email";
        isValid = false;
    } else {
        document.getElementById("emailloginError").innerText = "";
    }

    const password = document.getElementById("passwordlogin").value.trim();
    if (password === "") {
        document.getElementById("passwordloginError").innerText = "Please enter a password";
        isValid = false;
    } else {
        document.getElementById("passwordloginError").innerText = "";
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
});


