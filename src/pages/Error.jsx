import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    return (
        <section className="error-container">
            <h1>Something went wrong :(</h1>
            <p>{error.message}</p>
            <p>Please try again or refresh your page.</p>
        </section>
    )
}