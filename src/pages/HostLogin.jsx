import { useState } from "react";
import { Link } from "react-router-dom";

export default function HostLogin() {
    const [loginFormData, setLoginFormData] = useState({email: '', password: ''});

    function updateFormData(e) {
        const {name, value} = e.target;

        setLoginFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    console.log(loginFormData);

    return (
        <section className="host-login">
            <h1 className="host-login-header">Sign in to your account</h1>

            <form className="host-login-form">
                <input
                    type="email"
                    value={loginFormData.email}
                    onChange={(e) => updateFormData(e)}
                    name="email"
                    placeholder="Email address"
                    aria-label="Email address" />

                <input
                    type="password"
                    value={loginFormData.password}
                    onChange={(e) => updateFormData(e)}
                    name="password"
                    placeholder="Password"
                    aria-label="Password" />

                <button className="sign-in-btn">Sign in</button>
            </form>

            <h4 className="sign-up-text">
                Don't have an account? <Link to='' className='sign-up-link'>Create one now</Link>
            </h4>
        </section>
    )
}