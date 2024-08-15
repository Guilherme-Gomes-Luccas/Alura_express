import mongoose from "mongoose";

async function conectaDatabase () {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.m31b8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default conectaDatabase;