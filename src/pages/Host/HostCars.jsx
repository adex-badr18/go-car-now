export default function HostCars() {
    return (
        <section className="host-cars">
            <div className="dash--listed-cars">
                <div className="dash--listed-cars-header">
                    <h4 className="listed-cars-title">Your listed cars</h4>
                </div>

                <div className="dash--cars-list">
                    <div className="dash--car-wrapper">
                        <img className="dash--car-thumb" src="/pickup-van.webp" alt="" />

                        <div className="dash--car">
                            <div className="dash--car-info">
                                <h4 className="dash--car-name">Pickup Van</h4>
                                <h5 className="dash--car-price">$100/day</h5>
                            </div>

                            <h5 className="dash-link">Edit</h5>
                        </div>
                    </div>

                    <div className="dash--car-wrapper">
                        <img className="dash--car-thumb" src="/hatchback.jpg" alt="" />

                        <div className="dash--car">
                            <div className="dash--car-info">
                                <h4 className="dash--car-name">Hatchback Golf</h4>
                                <h5 className="dash--car-price">$120/day</h5>
                            </div>

                            <h5 className="dash-link">Edit</h5>
                        </div>
                    </div>

                    <div className="dash--car-wrapper">
                        <img className="dash--car-thumb" src="/mini-truck.webp" alt="" />

                        <div className="dash--car">
                            <div className="dash--car-info">
                                <h4 className="dash--car-name">Mini Truck</h4>
                                <h5 className="dash--car-price">$80/day</h5>
                            </div>

                            <h5 className="dash-link">Edit</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}