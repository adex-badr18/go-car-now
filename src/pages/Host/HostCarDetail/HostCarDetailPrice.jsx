import { useOutletContext } from "react-router-dom";

export default function HostCarDetailPrice() {
    const [car] = useOutletContext();

    return (
        <div className="host-car-detail-price">
            <h3 className="car-detail-price">${car?.price}<span>/day</span></h3>
        </div>
    )
}