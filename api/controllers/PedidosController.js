const { BOOLEAN } = require('sequelize');
const database = require('../models');

class PedidosController {

    static async criaPedido(req, res) {
        const { mesaId, funcionarioId, clienteId, fechado } = req.body;
        const novoPedido = { mesa_id: Number(mesaId), funcionario_id: Number(funcionarioId), cliente_id: Number(clienteId) };
        try {
            const novoPedidoCriado = await database.Pedidos.create(novoPedido);
            return res.status(200).json(novoPedidoCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async adicionarItemPedido(req, res) {
        const { pedido_id } = req.params;
        const { items } = req.body;
        try {
            for (const item of items) {

                const itemDb = await database.Itens.findByPk(item.itemId);
                console.log(itemDb.dataValues);
                const itemPedido = {
                    itens_id: item.itemId,
                    pedido_id: pedido_id,
                    quantidade: item.quantidade,
                    valor_itens: itemDb.dataValues.valor
                };
                const itemObj = await database.itens_pedido.findOne({
                    where: {
                        itens_id: item.itemId,
                        pedido_id: pedido_id
                    }
                })
                console.log(itemObj)
                if (itemObj) {

                    let quantidade;
                    if (item.acao === "ADICIONAR") {
                        quantidade = itemObj.dataValues.quantidade + item.quantidade
                    } else {
                        quantidade = itemObj.dataValues.quantidade - item.quantidade
                    }
                    await database.itens_pedido.update({
                        quantidade: quantidade,
                        valor_itens: itemDb.dataValues.valor
                    },
                        {
                            where: {
                                pedido_id: pedido_id,
                                itens_id: itemObj.itens_id
                            }
                        })
                } else {
                    await database.itens_pedido.create(itemPedido)
                }
            }
            return res.status(200).json(items)
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async pegaValorTotal(req, res) {
        const { pedido_id } = req.params;

        try {
            const valorTotal = await database.itens_pedido.sum('valor_itens', {
                where: {
                    pedido_id: pedido_id
                },
            })
            return res.status(200).json(valorTotal)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }


    static async pegarTodosOsPedidos(req, res) {
        try {
            const todosOsPedidos = await database.itens_pedido.findAll()
            return res.status(200).json( todosOsPedidos)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async pegaUmPedido(req, res) {
        const { id } = req.params;
        try {
            const umPedido = await database.itens_pedido.findOne({
                where: {
                   id: Number(id)
                }
            })
            return res.status(200).json(umPedido);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}



module.exports = PedidosController;