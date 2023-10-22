export default function CarCard({ imgUrl, name, price, type }) {
    const typeClass = 'car-type ';
    typeClass += type === 'luxury' ? 'luxury' : '';
    typeClass += type === 'simple' ? 'simple' : '';
    typeClass += type === 'rugged' ? 'rugged' : '';

    return (
        <div className="car-card">
            <div className="card-img-container">
                <img src={imgUrl} alt={name} className="car-img" />
            </div>

            <div className="car-info">
                <h3 className="car-name">{name}</h3>
                <h3 className="car-price">${price} <span>/day</span></h3>
            </div>

            <div className={typeClass}>{type}</div>
        </div>
    )
}