import { useOutletContext } from "react-router-dom";

export default function HostCarDetailPhotos() {
    const [car] = useOutletContext();

    return (
        <div className="host-car-detail-photos">
            <img src={car?.imageUrl} alt={car?.name} />
        </div>
    )
}