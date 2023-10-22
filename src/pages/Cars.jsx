import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import '../server';

export default function Cars() {
    const [carsArray, setCarsArray] = useState([]);

    useEffect(() => {
        fetch('/api/cars')
            .then(res => res.json())
            .then(data => setCarsArray(data.cars))
    }, []);

    return (
        <section className="cars">
            <h1>Cars page goes here 🚙</h1>
        </section>
    )
}