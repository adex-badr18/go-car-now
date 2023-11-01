// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, documentId } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1WSt-eDHltrp9t9psXLZVyEFKuBbpuAo",
    authDomain: "go-car-now.firebaseapp.com",
    projectId: "go-car-now",
    storageBucket: "go-car-now.appspot.com",
    messagingSenderId: "564006304003",
    appId: "1:564006304003:web:ed71f7f23bbb4174955136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const carsCollectionRef = collection(db, 'cars');

async function getCars() {
    const snapshot = await getDocs(carsCollectionRef);

    const cars = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    const data = cars.map(car => {
        return {
            ...car,
            imageUrl: car.imageUrl.startsWith('https://') ? car.imageUrl : `.${car.imageUrl}`
        }
    });

    return data;
}

async function getCarDetails(carId) {
    const carRef = doc(db, 'cars', carId);
    const snapshot = await getDoc(carRef);

    if (snapshot.exists()) {
        const data = {
            id: snapshot.id,
            ...snapshot.data(),
            imageUrl: snapshot.data().imageUrl.startsWith('https://') ? snapshot.data().imageUrl : `..${snapshot.data().imageUrl}`,
        };
        
        return data;
    } else {
        throw {
            message: "No such car exists!"
        };
    }
}

async function fetchHostCars() {
    const hostCarsQuery = query(carsCollectionRef, where('hostId', '==', '123'));
    const snapshot = await getDocs(hostCarsQuery);

    const cars = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    const data = cars.map(car => {
        return {
            ...car,
            imageUrl: car.imageUrl.startsWith('https://') ? car.imageUrl : `.${car.imageUrl}`
        }
    });

    return data;
}

async function fetchHostCarDetail(carId) {
    const hostCarsQuery = query(carsCollectionRef, where(documentId(), '==', carId), where('hostId', '==', '123'));
    const snapshot = await getDocs(hostCarsQuery);

    const cars = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    const data = cars.map(car => {
        return {
            ...car,
            imageUrl: car.imageUrl.startsWith('https://') ? car.imageUrl : `../..${car.imageUrl}`
        }
    });

    return data[0];
}


// async function getCars() {
//     const res = await fetch('/api/cars');

//     if (!res.ok) {
//         throw {
//             message: 'Failed to fetch cars',
//             statusText: res.statusText,
//             status: res.status
//         };
//     }

//     const data = await res.json();
//     return data.cars;
// }

// async function getCarDetails(carId) {
//     const res = await fetch(`/api/cars/${carId}`)
//     if (res.ok) {
//         const data = await res.json();
//         return data.cars;
//     }

//     throw {
//         message: "Unable to fetch car details.",
//         status: res.status,
//         statusText: res.statusText
//     };
// }

// async function fetchHostCars() {
//     const res = await fetch('/api/host/cars');

//     if (res.ok) {
//         const data = await res.json();
//         return data.cars;
//     }

//     throw {
//         message: "Unable to fetch host cars.",
//         status: res.status,
//         statusText: res.statusText
//     };
// }

// async function fetchHostCarDetail(carId) {
//     const res = await fetch(`/api/host/cars/${carId}`);

//     if (res.ok) {
//         const data = await res.json();
//         return data.cars[0];
//     }

//     throw {
//         message: "Unable to fetch car details.",
//         status: res.status,
//         statusText: res.statusText
//     };
// }

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

export { getCarDetails, getCars, fetchHostCars, fetchHostCarDetail, loginUser }