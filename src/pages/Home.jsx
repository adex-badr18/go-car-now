import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="home">
            <h1 className="hero-header">Instant Mobility at Your Fingertips. Explore the City with Ease.</h1>

            <p className="hero-description">
                Experience freedom, flexibility, and total convenience on your road trip or daily commuting.
                <span>
                    Wherever you go, whenever you need – our fleet of reliable vehicles take you there.
                </span>
            </p>

            <Link to='/cars' className="cta-btn link-btn home-link">Find your car</Link>
        </section>
    )
}