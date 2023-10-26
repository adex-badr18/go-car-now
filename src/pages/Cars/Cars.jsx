import { useEffect, useState } from "react";
import CarCard from "../../components/CarCard";
import '../../server';
import { useSearchParams, Link } from "react-router-dom";

export default function Cars() {
    const [carsArray, setCarsArray] = useState([]);
    const [carTypes, setCarTypes] = useState([]);
    const [searchparams, setSearchParams] = useSearchParams();

    let typeFilter = searchparams.get('type');

    useEffect(() => {
        fetch('/api/cars')
            .then(res => res.json())
            .then(data => {
                setCarsArray(data.cars);
            })
    }, []);

    useEffect(() => {
        setCarTypes(() => {
            const types = [];
            carsArray.forEach(car => {
                if (!types.includes(car.type)) {
                    types.push(car.type)
                }
            })
            return types;
        });
    }, [carsArray]);

    const carsElement = carsArray
        .filter(car => {
            return typeFilter ? car.type.toLowerCase() === typeFilter : car
        })
        .map(car => (
            <CarCard
                key={car.id}
                id={car.id}
                imgUrl={car.imageUrl}
                name={car.name}
                price={car.price}
                type={car.type} />
        ));

    const carTypesElement = carTypes.map(carType => {
        return (
            <button
                key={carType}
                onClick={() => setSearchParams({ type: carType })}
                className={`car-type-btn ${carType}`}
            >
                {carType}
            </button>
        )
    });

    return (
        <section className="cars">
            <h1 className="cars-header">Explore our car options</h1>

            <div className="filter-container">
                {carTypesElement}

                <button onClick={() => setSearchParams({})} className="car-type clear-filter">Clear filters</button>
            </div>

            <div className="cars-list">
                {carsElement}
            </div>
        </section>
    )
}