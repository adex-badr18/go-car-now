export default function CarItem({imgUrl, name, price}) {
    return (
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
    )
}