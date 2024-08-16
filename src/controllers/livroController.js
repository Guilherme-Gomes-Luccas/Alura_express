import livro from "../models/livro.js"

class LivroController {
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros); // 200 --> OK
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`}) // 500 --> erro interno do servidor  
        }  
    };

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado); // 200 --> OK
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do livro`}) // 500 --> erro interno do servidor  
        }  
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({message: "Criado com sucesso", livro: novoLivro}) // 200 --> OK 
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`}) // 500 --> erro interno do servidor
        }  
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"}); // 200 --> OK
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização do livro`}) // 500 --> erro interno do servidor  
        }  
    };

    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findOneAndDelete(id)
            res.status(200).json({message: "Livro deletado com sucesso"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao deletar o livro`}) // 500 --> erro interno do servidor  
        }
    }
};

export default LivroController