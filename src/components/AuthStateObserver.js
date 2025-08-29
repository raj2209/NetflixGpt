import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';


const AuthStateObserver = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Auth state changed: User detected", user.email);
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
                navigate('/browse');
            } else {
                console.log("Auth state changed: No user detected");
                dispatch(removeUser());
                navigate('/');
            }
        });
      return unsubscribe;
    }, [dispatch, navigate]);


    return null;
}

export default AuthStateObserver;