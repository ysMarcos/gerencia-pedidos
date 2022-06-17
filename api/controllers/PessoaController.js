const database = require('../models');

class PessoaController {

    static async pegaTodasAsPessoas(req, res){
        try{
            const {tipo} = req.query;
            let where = {}
            if (tipo) {
                where.cargo = tipo
            }

            console.log(req.query, where);
            const todasAsPessoas = await database.Pessoas.findAll({
                where
            })
            return res.status(200).json({todasAsPessoas})
        } catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        const {id} = req.params;
        try{
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa);            
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async criaNovaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async atualizaPessoa(req, res){
        const{id} = req.params;
        const novasInfos = req.body;
        try{
            const pessoaAtualizada = await database.Pessoas.update(novasInfos, {where: {id: Number(id)}});
            return res.status(200).json(pessoaAtualizada);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async deletaPessoa(req, res){
        const{id} = req.params;
        try{
            await database.Pessoas.destroy({where:{id: Number(id)}})
            return res.status(200).json('Banido')
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async pegaFuncionarios(req, res){
    try{
        const pegaFuncionarios = await database.Pessoas.findAll({
            where: {
                cargo: 'garçom'
            }
        })
        return res.status(200).json(pegaFuncionarios)
    } catch(err){
        res.status(500).json(err.message)
    }
}
}

module.exports = PessoaController;  