import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        cars: Model,
    },

    seeds(server) {
        server.create("car", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "789" })
        server.create("car", { id: "2", name: "Hatchback Golf", price: 80, description: "Hatchbacks are similar to sedans but have a rear door that opens upward, providing easy access to the cargo area. They are practical for urban driving due to their compact size and fuel efficiency. Hatchbacks offer a good balance between passenger space and cargo capacity, making them suitable for small families and individuals.", imageUrl: "/hatchback.jpg", type: "rugged", hostId: "456" })
        server.create("car", { id: "3", name: "Mini Truck", price: 100, description: "Mini trucks are popular for commercial purposes in crowded cities where larger vehicles might face challenges in maneuverability and parking. They are often used for small-scale deliveries, especially in narrow streets and congested areas. Due to their size, they are economical and practical for businesses dealing with light cargo loads.", imageUrl: "/mini-truck.webp", type: "luxury", hostId: "123" })
        server.create("car", { id: "4", name: "Mini Van", price: 65, description: "Minivans are designed with family comfort and practicality in mind. They have spacious interiors with multiple seating rows and ample cargo space. Minivans are ideal for large families, offering room for both passengers and luggage. They are commonly used for family vacations and carpools.", imageUrl: "/minivan.jpg", type: "simple", hostId: "789" })
        server.create("car", { id: "5", name: "Pickup Truck", price: 120, description: "Pickup trucks are versatile vehicles with an open cargo bed at the back. They come in various sizes, from compact to full-size, and are known for their towing capabilities and off-road prowess. Pickup trucks are widely used for transporting goods, hauling trailers, and carrying equipment.", imageUrl: "/pickup-van.webp", type: "luxury", hostId: "456" })
        server.create("car", { id: "6", name: "Van Truck", price: 70, description: "Van trucks are vehicles that combine the features of a van and a truck. They have an enclosed cargo area like a van but often come with a truck chassis, allowing them to handle heavier loads compared to typical vans. Van trucks are commonly used for commercial purposes, such as transporting goods, tools, and equipment. ", imageUrl: "/vantruck.webp", type: "rugged", hostId: "123" })
        server.create("car", { id: "7", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "789" })
        server.create("car", { id: "8", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" })
        server.create("car", { id: "9", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", hostId: "123" })
        server.create("car", { id: "10", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" })
        server.create("car", { id: "11", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "456" })
        server.create("car", { id: "12", name: "Crossover", price: 70, description: "Crossovers combine features of SUVs and passenger cars. They offer a higher driving position like an SUV but are built on a car platform, providing a more comfortable ride. Crossovers are versatile vehicles that appeal to a wide range of consumers, offering a good balance of space, fuel efficiency, and handling.", imageUrl: "/crossover.jpg", type: "luxury", hostId: "123" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/cars", (schema, request) => {
            return schema.cars.all()
        })
        
        this.get("/cars/:id", (schema, request) => {
            const id = request.params.id
            
            return schema.cars.find(id)
        })

        this.get("/host/cars", (schema, request) => {
            // Hard-code the hostId for now
            return schema.cars.where({ hostId: "123" })
        })

        this.get("/host/cars/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.cars.where({ id, hostId: "123" })
            // return new Response(400, {}, {error: "Error fetching data"})
        })
    }
})