import { Link } from "react-router-dom";

import urlPhoto from "../../assets/men-login.png"


import "./LoginPages.css"

function LoginPages() {
    return (
        <div className="wrapper">
            <div className="page-auth">
                <div className="form">
                    <h1 className="form__head">Welcome</h1>
                    <form>
                        <label className="form__label">
                            <span>Email</span>
                            <input type="email" placeholder="Email" />
                        </label>
                        <label className="form__label">
                            <span>Password</span>
                            <input type="password" placeholder="Password" />
                            <span className="password__text "></span>
                        </label>
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