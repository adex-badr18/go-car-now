export default function HostLogin() {
    return (
        <section className="host-login">
            <h1 className="host-login-header">Sign in to your account</h1>

            <form action="" className="host-login-form">
                <input type="email" name="email" id="email" placeholder="Email address" aria-label="Email address" />

                <input type="password" name="password" placeholder="Password" id="password" aria-label="Password" />

                <button className="sign-in-btn">Sign in</button>
            </form>

            <h4 className="sign-up-text">
                Don't have an account? <Link to='' className='sign-up-link'>Create one now</Link>
            </h4>
        </section>
    )
}