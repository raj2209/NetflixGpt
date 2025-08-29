export const checkValidateData = (email, password, name = '', isSignInMode = true) => {
    const errors = {};
    const isEmailValid = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    if (!isEmailValid) {
        errors.email = "Email is not valid";
    }

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password);
    if (!isPasswordValid) {
        errors.password = "Password is not valid";
    }
    
    // Only validate name if not in sign-in mode
    if (!isSignInMode) {
        if (name.trim() === '') {
            errors.name = "Name is required";
        }
    }
    return errors;
}

//Return error message if email password is not valid
//return empty object if valid