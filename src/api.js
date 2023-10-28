async function getCars() {
    const res = await fetch('/api/cars');

    if (!res.ok) {
        throw {
            message: 'Failed to fetch cars',
            statusText: res.statusText,
            status: res.status
        };
    }

    const data = await res.json();
    return data.cars;
}

async function getCarDetails(carId) {
    const res = await fetch(`/api/cars/${carId}`)
    if (res.ok) {
        const data = await res.json();
        return data.cars;
    }

    throw {
        message: "Unable to fetch car details.",
        status: res.status,
        statusText: res.statusText
    };
}

async function fetchHostCars() {
    const res = await fetch('/api/host/cars');
    
    if (res.ok) {
        const data = await res.json();
        return data.cars;
    }
        
    throw {
        message: "Unable to fetch host cars.",
        status: res.status,
        statusText: res.statusText
    };
}

async function fetchHostCarDetail(carId) {
    const res = await fetch(`/api/host/cars/${carId}`);

    if (res.ok) {
        const data = await res.json();
        return data.cars[0];
    }
        
    throw {
        message: "Unable to fetch car details.",
        status: res.status,
        statusText: res.statusText
    };
}

async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export {getCarDetails, getCars, fetchHostCars, fetchHostCarDetail, loginUser}