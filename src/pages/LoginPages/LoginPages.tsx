import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

import InputEmail from "../../components/InputEmail/InputEmail";
import InputPassword from "../../components/InputPassword/InputPassword";

import urlPhoto from "../../assets/men-login.png"


import "./LoginPages.css"

interface IForm {
    email: string;
    password: string;
}

function LoginPages() {
    const { register, handleSubmit, formState: { errors } } = useForm<IForm>();
    console.log(errors);


    const onSubmit = async (data: IForm) => {
        console.log(data);

    }
    const regEmail = register('email', {
        required: 'Please input email',
        validate: (value) => ((value.length > 5)), pattern: /^\S+@\S+\.\S+$/
    });
    const regPassword = register('password', {
        required: 'Please input SDSD',
        validate: (value) => ((value.length > 5)), pattern: /^\S+@\S+\.\S+$/

    });
    return (
        <div className="wrapper">
            <div className="page-auth">
                <div className="form">
                    <h1 className="form__head">Welcome</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputEmail register={regEmail} error={errors.email}></InputEmail>
                        <InputPassword register={regPassword} error={errors.password}></InputPassword>
                        <div className="form__info">
                            <label className="label__checkbox">
                                <input type="checkbox" />
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