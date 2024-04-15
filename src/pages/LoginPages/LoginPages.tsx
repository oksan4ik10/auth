
import { useNavigate } from "react-router-dom";

import FormLogin from "../../components/FormLogin/FormLogin";

import {
    signInWithEmailAndPassword,
    Auth,
} from 'firebase/auth';


import { useAppDispatch } from "../../store/store";
import { setToken } from "../../store/reducers/userReducer";



function LoginPages() {


    const navigate = useNavigate();

    // !Qw1234567 kj@mail.ru
    const dispatch = useAppDispatch();

    const funcSubmit = async (auth: Auth, email: string, password?: string, check?: boolean) => {

        if (!password) return
        const s = await signInWithEmailAndPassword(auth, email, password);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const token = (s as any).user.accessToken;
        if (check) localStorage.setItem("tokenAuth", token)
        dispatch(setToken(token))
        navigate(`/`)

    }


    return (
        <FormLogin funcSubmit={funcSubmit} login={true}></FormLogin>

    );
}

export default LoginPages;