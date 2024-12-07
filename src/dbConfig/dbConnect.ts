import mongoose from "mongoose";


export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('Mongo DB connected')
        })

        connection.on('error', (err) => {
            console.log("Mongo Db connection error", err);
            process.exit
        })

        
    } catch (error) {
        console.log("Unable to connect to DB:", error)
    }
}