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
                        </label>
                        <div className="form__info">
                            <label>
                                <input type="checkbox" />
                                <span>Remember Me</span>
                            </label>
                            <Link to="/sign-up">Forgot Password?</Link>
                        </div>

                        <button className="btn">Login</button>
                    </form>
                </div>
                <div className="page__photo">
                    <img src={urlPhoto} alt="photo" />
                </div>

            </div>
        </div>

    );
}

export default LoginPages;