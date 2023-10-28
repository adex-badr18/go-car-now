import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function HostLogin() {
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const { state } = useLocation();
    const [formStatus, setFormStatus] = useState('idle');

    function updateFormData(e) {
        const { name, value } = e.target;

        setLoginFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            console.log(formStatus);
            loginUser(loginFormData)
                .then(data => console.log(data))
        } catch (error) {
            console.log(error);
        } finally {
            setFormStatus('idle');
            console.log(formStatus);
        }
    }

    return (
        <section className="host-login">
            {
                state?.message &&
                <h3 className="login-first">{state.message}</h3>
            }

            <h1 className="host-login-header">Sign in to your account</h1>

            <form className="host-login-form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="email"
                    className="email-input"
                    value={loginFormData.email}
                    onChange={(e) => updateFormData(e)}
                    name="email"
                    placeholder="Email address"
                    aria-label="Email address" />

                <input
                    type="password"
                    className="password-input"
                    value={loginFormData.password}
                    onChange={(e) => updateFormData(e)}
                    name="password"
                    placeholder="Password"
                    aria-label="Password" />

                <button className="sign-in-btn" disabled={formStatus === 'submitting' ? true : false}>Sign in</button>
            </form>

            <h4 className="sign-up-text">
                Don't have an account? <Link to='' className='sign-up-link'>Create one now</Link>
            </h4>
        </section>
    )
}