let userName = prompt ("User Name:", '');

    if (userName === "Admin") {

        let passWord = prompt ("Password: ", '');

        if (passWord === "TheMaster") {
            alert ("Welcome");
        }
        else if (passWord === '' || passWord === null) {
            alert ("Canceled");
        }
        else {
            alert ("Wrong Password")
        }
    }
    else if (userName === '' || userName === null){
        alert("Canceled");
    }
    else {
        alert("I Don't Know You!");
    }