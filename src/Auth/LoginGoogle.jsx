import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from "../firebase/Firebase.init"

const LoginGoogle = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    if (gUser) {
        navigate(from, { replace: true });
    }
    return [signInWithGoogle]

};

export default LoginGoogle;