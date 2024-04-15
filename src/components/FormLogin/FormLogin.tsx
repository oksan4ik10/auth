import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

import {
    getAuth,
    Auth,
} from 'firebase/auth';

import InputEmail from "../../components/InputEmail/InputEmail";
import InputPassword from "../../components/InputPassword/InputPassword";

import urlPhoto from "../../assets/men-login.png"



interface IForm {
    email: string;
    password: string;
    checkbox: boolean;

}

interface IProps {
    login: boolean;
    funcSubmit: (auth: Auth, email: string, password?: string, check?: boolean) => Promise<void>
}

function FormLogin(props: IProps) {
    const { login, funcSubmit } = props;
    const { register, handleSubmit, formState: { errors } } = useForm<IForm>({ shouldUseNativeValidation: false, });
    const auth = getAuth();

    const [errorAuth, setErrorAuth] = useState(false);

    // !Qw1234567 kj@mail.ru

    const onSubmit = async (data: IForm) => {
        const password = data.password ? data.password.trim() : "";
        try {
            funcSubmit(auth, data.email.trim(), password, data.checkbox)
        } catch (e) {
            setErrorAuth(true);
            return

        }


    }
    const regEmail = register('email', {
        required: 'You must specify a email',
        validate: (value) => ((value.length > 5)), pattern: /^\S+@\S+\.\S+$/
    });
    const regPassword = register('password', {
        required: login ? "You must specify a password" : false,
    });
    return (
        <div className="wrapper">
            <div className="page-auth">
                <div className="form">
                    <h1 className="form__head">Welcome</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputEmail register={regEmail} error={errors.email} errorAuth={errorAuth}></InputEmail>
                        {login && <InputPassword register={regPassword} error={errors.password} errorAuth={errorAuth}></InputPassword>}
                        {login && <div className="form__info">
                            <label className="label__checkbox">
                                <input type="checkbox"  {...register("checkbox")} />
                                <span className="label__check"></span>
                                <span className="label__text">Remember Me</span>
                            </label>
                            <Link to="/forgot" className="link">Forgot Password?</Link>
                        </div>}

                        <button className="btn form__btn">{login ? "Login" : "Recovery Password"}</button>
                    </form>
                    {login && <p className="about__text">Don’t have an Account ? <Link to="/sign-up" className="link">Sign up?</Link></p>}
                </div>
                <div className="page__photo">
                    <div className="photo__wrapper">
                        <img src={urlPhoto} alt="photo" />
                    </div>

                </div>

            </div>
        </div>

    );
}

export default FormLogin;