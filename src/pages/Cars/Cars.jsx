import { useEffect, useState } from "react";
import CarCard from "../../components/CarCard";
import '../../server';
import { useSearchParams, useLoaderData, Link } from "react-router-dom";
import { getCars } from "../../api";

export const loader = () => {
    return getCars();
}

export default function Cars() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const carsArray = useLoaderData();

    let typeFilter = searchParams.get('type');

    const carTypes = [];
    carsArray.forEach(car => {
        if (!carTypes.includes(car.type)) {
            carTypes.push(car.type)
        }
    });

    const carsElement = carsArray?.filter(car => {
            return typeFilter ? car.type.toLowerCase() === typeFilter : car
        })
        .map(car => (
            <CarCard
                key={car.id}
                id={car.id}
                imgUrl={car.imageUrl}
                name={car.name}
                price={car.price}
                type={car.type}
                searchParams={searchParams} />
        ));

    const carTypesElement = carTypes.map(carType => {
        return (
            <button
                key={carType}
                onClick={() => setFilterParams('type', carType)}
                className={`car-type-btn ${carType} ${typeFilter === carType ? 'selected' : ''}`}
            >
                {carType}
            </button>
        )
    });

    function setFilterParams(key, value) {
        setSearchParams(prevParams => {
            value === null ? prevParams.delete(key) : prevParams.set(key, value);
            return prevParams;
        });
    }

    if (error) return (
        <section>
            <h1>Sorry, there was an error: {error.message}</h1>
        </section>
    )

    return (
        <section className="cars">
            <h1 className="cars-header">Explore our car options</h1>

            <div className="filter-container">
                {carTypesElement}

                {
                    typeFilter &&
                    <button onClick={() => setFilterParams('type', null)} className="car-type clear-filter">Clear filters</button>
                }
            </div>

            <div className="cars-list">
                {carsElement}
            </div>
        </section>
    )
}