// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
var submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", checkUserName, checkEmail);
submitbutton.addEventListener("click", checkEmail);
submitbutton.addEventListener("click", checkPassword);
function checkUserName() {
    var specialcharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"
        , "_", "+", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", "\"", "\'",
        "<", ">", ",", ".", "?"];
    var set;
    var uname = document.getElementById("usertext").value;
    uname.trim();
    for (var a = 0; a < uname.length; a++) {
        if (specialcharacters.includes(uname[a]))
            set = true;
    }
    if (uname.length >= 8 && uname.length < 15 && !uname.includes(" ") && !set)
        return true;
    else
        return false;
}
// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
    var specialcharacters = ["~", "`", "!", "#", "$", "%", "^", "&", "*", "(", ")", "-"
        , "+", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", "\"", "\'",
        "<", ">", ",", "?"];
    var set;
    var email = document.getElementById("emailtext").value;
    email.trim();

    for (var a = 0; a < email.length; a++) {
        if (specialcharacters.includes(email[a]))
            set = true;
    }
    if (!email.includes(" ") && !set)
        return true;
    else
        return false;
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
    var specialcharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"
        , "_", "+", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", "\"", "\'",
        "<", ">", ",", ".", "?"];
    var num = "1234567890";
    var set = false, setcap = false, setnum = false, temp;
    var pass = document.getElementById("passwordtext").value;
    pass.trim();
    for (var a = 0; a < pass.length; a++) {
        if (specialcharacters.includes(pass[a]))
            set = true;
    }
    for (var a = 0; a < pass.length; a++) {
        temp = pass[a];
        temp = temp.toUpperCase()
        if (pass[a] == temp)
            setcap = true;

    }
    for (var a = 0; a < pass.length; a++) {
        if (num.includes(pass[a]))
            setnum = true;
    }

    if (set && setcap && setnum)
        return true;
    else
        return false;
}