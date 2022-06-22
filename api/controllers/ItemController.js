const database = require('../models');

class ItemController {

    static async pegaTodosOsItens(req, res) {
        try {
            const todasAsItens = await database.Itens.findAll()
            return res.status(200).json({ todasAsItens })
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async pegaUmItem(req, res) {
        const { id } = req.params;
        try {
            const umItem = await database.Itens.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umItem);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async criaItem(req, res) {
        const novoItem = req.body
        try {
            const novoItemCriado = await database.Itens.create(novoItem);
            return res.status(200).json(novoItemCriado);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async atualizaItem(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            const ItemAtualizado = await database.Itens.update(novasInfos, { where: { id: Number(id) } });
            return res.status(200).json(ItemAtualizado);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async deletaItem(req, res) {
        const { id } = req.params;
        try {
            await database.Itens.destroy({ where: { id: Number(id) } })
            return res.status(200).json('Deletado')
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

}

module.exports = ItemController;