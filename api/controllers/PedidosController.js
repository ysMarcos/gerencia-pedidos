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
        const { id_pedido } = req.params;
        const { items } = req.body;
        const item = await database.Itens.findByPk(id_pedido);
        
        try {
            
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PedidosController;