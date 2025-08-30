import { useState, useRef, useEffect } from 'react';
import { BACKGROUND_IMAGE } from '../utils/constants.js'
import Header from './Header.js'
import { checkValidateData } from '../utils/validate.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase.js';
import { handleAuthError } from '../utils/authUtils.js';
import { addUser } from '../utils/userSlice.js';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const dispatch = useDispatch();

    const handleSignup = () => {
        setIsSignIn(!isSignIn);
    }


    useEffect(() => {
        setErrMsg(null);
        emailRef.current.value = '';
        passwordRef.current.value = '';
    }, [isSignIn]);

    const handleSignInSignUp = () => {

        if (isSignIn) {
            const errMsg = checkValidateData(emailRef.current.value, passwordRef.current.value);
            setErrMsg(errMsg);
            if (Object.keys(errMsg).length === 0) {
                signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                    })
                    .catch((error) => {
                        console.error("Sign in error:", error.code, error.message);
                        handleAuthError(error, true, setErrMsg);
                    });
            }
        } else {
            const errMsg = checkValidateData(
                emailRef.current.value,
                passwordRef.current.value,
                nameRef.current.value,
                false
            );
            setErrMsg(errMsg);
            if (Object.keys(errMsg).length === 0) {
                createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(auth.currentUser, {
                            displayName: "Raj Gupta"
                        }).then(() => {
                            const { displayName, email } = auth.currentUser;
                            dispatch(addUser({ displayName, email }));
                            setIsSignIn(true);
                        }).catch((error) => {
                            console.error("Error updating profile:", error);
                        });
                    })
                    .catch((error) => {
                        handleAuthError(error, false, setErrMsg);
                    });

            }
        }
    }

    return (
        <div className=''>
            <div className='absolute overflow-hidden'>
                <img src={BACKGROUND_IMAGE} alt='background-image' className='scale-125 opacity-90' />
            </div>
            <Header />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignInSignUp();
                }}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black w-1/3 h-5/6 mt-10 rounded-md text-white p-12 opacity-85'>
                <p className='m-2 font-sans font-bold text-2xl'>{isSignIn ? 'Sign In' : 'Sign Up'} </p>
                {!isSignIn && <input ref={nameRef} type='text' placeholder='Name' className='p-3 m-2 bg-black bg-opacity-55 rounded-md border' />}
                {errMsg?.name && <p className='text-red-500 mx-2'>{errMsg?.name}</p>}
                <input ref={emailRef} type='email' placeholder='Email or mobile number' className='p-3 m-2 bg-black bg-opacity-55 rounded-md border' />
                {errMsg?.email && <p className='text-red-500 mx-2'>{errMsg?.email}</p>}
                <input ref={passwordRef} type='password' placeholder='Password' className='p-3 m-2 bg-black bg-opacity-55 rounded-md border' />
                {errMsg?.password && <p className='text-red-500 mx-2'>{errMsg?.password}</p>}
                <button
                    type="submit"
                    className='p-2 m-2 bg-red-600 text-white rounded-md font-semibold'
                >{isSignIn ? 'Sign in' : 'Sign up'}</button>
                {/* <p className='text-red-500'>{errMsg}</p> */}
                <p className='mx-auto my-2'>OR</p>
                <button className='p-2 m-2 bg-[rgb(56,53,52)] rounded-sm'>Use a sign-in code </button>
                <p className='mx-auto underline font-bold'>Forgot Password?</p>
                <div className='m-2'>
                    <input type="checkbox" /> Remember me
                </div>

                <p className='mx-2 mb-2'>{isSignIn ? 'New to Netflix?' : 'Already have an account?'} <span className='font-semibold cursor-pointer' onClick={handleSignup}>{isSignIn ? 'Sign up now' : 'Sign in here'}</span></p>
                <p className='mx-2 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                <div className='text-blue-600 underline m-2 text-xs'>Learn more.</div>
            </form>
        </div>
    )
}

export default Login;
