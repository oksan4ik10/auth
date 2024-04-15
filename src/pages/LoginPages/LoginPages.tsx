import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import {
    signInWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';

import InputEmail from "../../components/InputEmail/InputEmail";
import InputPassword from "../../components/InputPassword/InputPassword";

import urlPhoto from "../../assets/men-login.png"

import { useAppDispatch } from "../../store/store";
import { setToken } from "../../store/reducers/userReducer";


interface IForm {
    email: string;
    password: string;
    checkbox: boolean;
}

function LoginPages() {
    const { register, handleSubmit, formState: { errors } } = useForm<IForm>({ shouldUseNativeValidation: false, });
    console.log(errors);

    const navigate = useNavigate();
    const auth = getAuth();

    const [errorAuth, setErrorAuth] = useState(false);

    // !Qw1234567 kj@mail.ru
    const dispatch = useAppDispatch();
    const onSubmit = async (data: IForm) => {

        try {
            const s = await signInWithEmailAndPassword(auth, data.email, data.password);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const token = (s as any).user.accessToken;
            if (data.checkbox) localStorage.setItem("tokenAuth", token)
            dispatch(setToken(token))
            navigate(`/`)


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
        required: "You must specify a password",
    });
    return (
        <div className="wrapper">
            <div className="page-auth">
                <div className="form">
                    <h1 className="form__head">Welcome</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputEmail register={regEmail} error={errors.email} errorAuth={errorAuth}></InputEmail>
                        <InputPassword register={regPassword} error={errors.password} errorAuth={errorAuth}></InputPassword>
                        <div className="form__info">
                            <label className="label__checkbox">
                                <input type="checkbox"  {...register("checkbox")} />
                                <span className="label__check"></span>
                                <span className="label__text">Remember Me</span>
                            </label>
                            <Link to="/sign-up" className="link">Forgot Password?</Link>
                        </div>

                        <button className="btn form__btn">Login</button>
                    </form>
                    <p className="about__text">Don’t have an Account ? <Link to="/sign-up" className="link">Sign up?</Link></p>
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

export default LoginPages;