export default function CarCard({imgUrl, name, price, type}) {
    return (
        <div className="car-card">
            <img src={imgUrl} alt={name} className="car-img" />

            <div className="car-info">
                <h3 className="car-name">{name}</h3>
                <h3 className="car-price">${price} <span>/day</span></h3>
            </div>

            <div className="car-type">{type}</div>
        </div>
    )
}