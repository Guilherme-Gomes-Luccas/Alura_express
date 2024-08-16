import mongoose from "mongoose";
import { autorSchema } from "./autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true},
    editora: { type: String },
    preco: { type: Number },
    pagina: { type: Number },
    autor: autorSchema
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema)

export default livro;