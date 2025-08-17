import { useState } from 'react';
import { BACKGROUND_IMAGE } from '../utils/constants.js'
import Header from './Header'

const Body = () => {
        const [isSignIn,setIsSignIn] = useState(true);

        const handleSignup=()=>{
            setIsSignIn(!isSignIn);
        }
        

    return (
        <div className=''>
            <div className='absolute overflow-hidden'>
                <img src={BACKGROUND_IMAGE} alt='background-image' className='scale-125 opacity-90' />
            </div>
            <Header />
            <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black w-1/3 h-5/6 mt-10 rounded-md text-white p-12 opacity-85'>
                <p className='m-2 font-sans font-bold text-2xl'>{isSignIn ? 'Sign In' : 'Sign Up'} </p>
                {!isSignIn && <input type='text' placeholder='Name' className='p-3 m-2 bg-black bg-opacity-55 rounded-md border' />}
                <input type='email' placeholder='Email or mobile number' className='p-3 m-2 bg-black bg-opacity-55 rounded-md border' />
                <input type='password' placeholder='Password' className='p-3 m-2 bg-black bg-opacity-55 rounded-md border' />
                <button className='p-2 m-2 bg-red-600 text-white rounded-md font-semibold'>{isSignIn ? 'Sign in' : 'Sign up'}</button>
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

export default Body
