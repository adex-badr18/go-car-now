export default function CarItem({imgUrl, name, price}) {
    const imageUrl = imgUrl.startsWith('https://') ? imgUrl : `.${imgUrl}`;

    return (
        <div className="dash--car-wrapper">
            <img className="dash--car-thumb" src={imageUrl} alt="" />

            <div className="dash--car">
                <div className="dash--car-info">
                    <h4 className="dash--car-name">{name}</h4>
                    <h5 className="dash--car-price">${price}/day</h5>
                </div>

                <h5 className="dash-link">Edit</h5>
            </div>
        </div>
    )
}