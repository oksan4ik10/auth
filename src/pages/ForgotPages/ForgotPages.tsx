
import { useNavigate } from "react-router-dom";

import FormLogin from "../../components/FormLogin/FormLogin";

import {
    Auth,
    sendPasswordResetEmail,
} from 'firebase/auth';




function ForgotPages() {


    const navigate = useNavigate();

    // !Qw1234567 kj@mail.ru

    const funcSubmit = async (auth: Auth, email: string) => {
        await sendPasswordResetEmail(auth, email);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        // dispatch(setToken(token))
        navigate(`/login`)

    }


    return (
        <FormLogin funcSubmit={funcSubmit} login={false}></FormLogin>

    );
}

export default ForgotPages;