export async function getCars() {
    const res = await fetch('/api/cars');
    console.log(res)

    if (!res.ok) {
        throw {
            message: 'Failed to fetch cars',
            statusText: res.statusText,
            status: res.status
        }
    }

    const data = await res.json();
    return data.cars;
}