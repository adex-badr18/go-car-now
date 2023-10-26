import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <section className="page-not-found">
            <h1>Sorry, the page you were looking for does not exist.</h1>
            <Link to='/'>Return to Home</Link>
        </section>
    )
}