import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import {
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';

import InputEmail from "../../components/InputEmail/InputEmail";
import InputPassword from "../../components/InputPassword/InputPassword";

import urlPhoto from "../../assets/man-sign.png"


import { useAppDispatch } from "../../store/store";
import { setToken } from "../../store/reducers/userReducer";
import ReactInputMask from "react-input-mask";


interface IForm {
    email: string;
    password: string;
    password_repeat: string;
    phone: string;
    checkbox: boolean;
}

function CreatePages() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<IForm>({ shouldUseNativeValidation: false, });
    const password = useRef({});
    password.current = watch("password", "");

    const navigate = useNavigate();
    const auth = getAuth();

    const [errorAuth, setErrorAuth] = useState(false);

    // !Qw1234567 kj@mail.ru
    const dispatch = useAppDispatch();
    const onSubmit = async (data: IForm) => {

        try {
            const s = await createUserWithEmailAndPassword(auth, data.email, data.password);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const token = (s as any).user.accessToken;

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
        pattern: { value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g, message: "Your password is not correct" }
    });
    const regPasswordRepeat = register('password_repeat', {
        validate: value =>
            value === password.current || "The passwords do not match"
    });
    return (
        <div className="wrapper">
            <div className="page-auth">
                <div className="form">
                    <h1 className="form__head">Create Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputEmail register={regEmail} error={errors.email} errorAuth={errorAuth}></InputEmail>
                        <label className={"form__label email " + ((errors.phone) ? "error" : "")}>
                            <span>Phone</span>
                            <ReactInputMask
                                mask={"+7(999)999-99-99"}
                                alwaysShowMask={false}

                                type={'text'}
                                placeholder="+7(999)999-99-99"
                                {...register("phone", { validate: (value) => value.length > 15 })}
                            />
                            {errors.phone && <p className='error-message'>{errors.phone.message}</p>}
                        </label>
                        <InputPassword register={regPassword} error={errors.password} errorAuth={errorAuth}></InputPassword>
                        <InputPassword register={regPasswordRepeat} error={errors.password_repeat} errorAuth={errorAuth}></InputPassword>

                        <button className="btn form__btn">Create Account</button>
                    </form>
                    <p className="about__text">Already have an Account ! <Link to="/login" className="link">Login</Link></p>
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

export default CreatePages;