// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";

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