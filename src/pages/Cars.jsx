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

    const carsElement = carsArray.map(car => (
        <CarCard 
            key={car.id} 
            imgUrl={car.imageUrl} 
            name={car.name} 
            price={car.price} 
            type={car.type} />
    ))

    return (
        <section className="cars">
            <h1>Cars page goes here 🚙</h1>

            <div className="cars-list">
                {carsElement}
            </div>
        </section>
    )
}