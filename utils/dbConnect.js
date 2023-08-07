import mongoose from "mongoose";

const dbConnect = async () => {
    if (mongoose.connections.readyState >= 1) {
        return;
    }
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to the database!");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        throw new Error("Failed to connect to the database.");
    }
};

export default dbConnect;