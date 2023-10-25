import { useOutletContext } from "react-router-dom";

export default function HostCarDetail() {
    const [car] = useOutletContext();

    return (
        <div className="host-car-detail-description">
            <p className="">Name: <span>{car?.name}</span></p>

            <p className="">Category: <span>{car?.type}</span></p>

            <p className="car-description">Description: <span>{car?.description}</span></p>

            <p className="">Visibility: <span>Public</span></p>
        </div>
    )
}