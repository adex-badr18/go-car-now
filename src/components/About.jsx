import aboutImg from '/about-img.png';

export default function About() {
    return (
        <section className="about">
            <img src={aboutImg} className='about-img' alt="Van in dark mode" />

            <div className="about-text">
                <h1 className='about-header'>Empowering Journeys, One Ride at a Time.</h1>

                <p className='about-description'>
                    At GoCarNow, we believe in the power of seamless mobility. Our story begins with a simple idea: <span>to transform the way you experience travel</span>. With a commitment to convenience and innovation, we've created a platform where getting from point A to B is not just a ride, but an experience. Whether you're exploring the city, commuting to work, or embarking on a spontaneous road trip, GoCarNow is your reliable partner in every journey.
                </p>

                <p className='about-description'>
                    We pride ourselves on providing instant access to a fleet of well-maintained vehicles, giving you the freedom to travel on your terms. Join us as we redefine transportation, making it effortless, affordable, and enjoyable. Your adventure starts with us – because at GoCarNow, the road is always open.
                </p>

                <div className="cta-container">
                    <h3>Your destination is waiting. <span>Your car is ready.</span></h3>

                    <button>Explore our cars</button>
                </div>
            </div>
        </section>
    )
}