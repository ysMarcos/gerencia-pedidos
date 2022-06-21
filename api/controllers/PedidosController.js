const database = require('../models');

class PedidosController {
    
    static async criaPedido(req, res){
        const {mesaId, funcionarioId, clienteId} = req.body;
        const novoPedido = {mesa_id: Number(mesaId), funcionario_id: Number(funcionarioId), cliente_id: Number(clienteId)};
        try {
            const novoPedidoCriado = await database.Pedidos.create(novoPedido);
            return res.status(200).json(novoPedidoCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async adicionarItemPedido(req, res){
        const { pedido_id } = req.params;
        const { items } = req.body;
        try{
        for (const item of items) {

            const itemDb = await database.Itens.findByPk(item.itemId);
            const itemPedido = {
                itens_id: item.itemId,
                pedido_id: pedido_id,
                quantidade: item.quantidade,
                valor: itemDb.dataValues.valor
            };
            console.log(itemPedido);
            const itemObj = await database.itens_pedido.findOne({
                where: {
                    itens_id: item.itemId,
                    pedido_id: pedido_id,
                    quantidade: item.quantidade 
                }
            })
            
            if (itemObj){
                await database.itens_pedido.update({
                    quantidade: itemObj.dataValues.quantidade + item.quantidade
                },
                {
                    where:{
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
}

module.exports = PedidosController;