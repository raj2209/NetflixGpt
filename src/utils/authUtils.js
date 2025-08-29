export const handleAuthError = (error, isSignInMode, setErrMsg) => {
    // Initialize an empty error object
    const errors = {};
    const errorCode = typeof error === 'string' ? error : error.code;
    const errorMessage = error.message || '';

    if (errorCode === 'auth/network-request-failed') {
        errors.email = "Network error. Please check your internet connection";
        setErrMsg(errors);
        return;
    }

    // Sign-in specific errors
    if (isSignInMode) {
        if (errorCode === 'auth/invalid-credential') {
            errors.email = "Invalid email or password";
        }
        else if (errorCode === 'auth/user-not-found') {
            errors.email = "User not found";
        }
        else if (errorCode === 'auth/wrong-password') {
            errors.password = "Invalid password";
        } else {
            errors.email = "Sign-in error: " + errorMessage;
        }
    }
    // Sign-up specific errors
    else {
        if (errorCode === 'auth/email-already-in-use') {
            errors.email = "Email already in use";
        } else if (errorCode === 'auth/invalid-email') {
            errors.email = "Invalid email format";
        } else if (errorCode === 'auth/weak-password') {
            errors.password = "Password is too weak";
        } else {
            errors.email = "Sign-up error: " + errorMessage;
        }
    }
    
    // Set the errors in the state
    setErrMsg(errors);
};
