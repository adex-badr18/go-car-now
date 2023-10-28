import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function HostLogin() {
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const { state } = useLocation();
    const [formStatus, setFormStatus] = useState('idle');
    const [error, setError] = useState(null);

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

        loginUser(loginFormData)
            .then(data => {
                console.log(data);
                setError(null)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setFormStatus('idle');
            })
    }

    return (
        <section className="host-login">
            {
                state?.message &&
                <h3 className="login-error">{state.message}</h3>
            }

            <h1 className="host-login-header">Sign in to your account</h1>


            <form className="host-login-form" onSubmit={(e) => handleSubmit(e)}>
                {
                    error &&
                    <h3 className="login-error">{error}</h3>
                }

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

                <button className="sign-in-btn" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Logging in...' : 'Log in'}
                </button>
            </form>

            <h4 className="sign-up-text">
                Don't have an account? <Link to='' className='sign-up-link'>Create one now</Link>
            </h4>
        </section>
    )
}