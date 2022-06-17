const database = require('../models');

class MesaController {
    
    static async pegaTodasAsMesas(req, res){
        try{
            const todasAsMesas = await database.Mesas.findAll()
            return res.status(200).json({todasAsMesas})
        } catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async pegaUmaMesa(req, res){
        const {id} = req.params;
        try{
            const umaMesa = await database.Mesas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaMesa);            
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async criaMesa(req, res) {
        const novaMesa = req.body
        try {
            const novaMesaCriada = await database.Mesas.create(novaMesa);
            return res.status(200).json(novaMesaCriada);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async atualizaMesa(req, res){
        const{id} = req.params;
        const novasInfos = req.body;
        try{
            const MesaAtualizada = await database.Mesas.update(novasInfos, {where: {id: Number(id)}});
            return res.status(200).json(MesaAtualizada);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async deletaMesa(req, res){
        const{id} = req.params;
        try{
            await database.Mesas.destroy({where:{id: Number(id)}})
            return res.status(200).json('Deletado')
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async pegaUmaReserva(req, res){
        const {reservaId} = req.params;
        try{
            const umaReserva = await database.Reservas.findOne({
                where: {
                    id: Number(reservaId),
                }
            })
            return res.status(200).json(umaReserva);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async pegaTodasAsReservas(req, res){
        try{
            const todasReservas = await database.Reservas.findAll()
            return res.status(200).json(todasReservas);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async criaReserva(req, res) {
        const {mesaId} = req.params
        const novaReserva = {...req.body, mesa_id: Number(mesaId)}
        try {
            const novaReservaCriada = await database.Reservas.create(novaReserva);
            return res.status(200).json(novaReservaCriada);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async deletaReserva(req, res){
        const {reservaId} = req.params;
        try{
            await database.Reservas.destroy({where:{id: Number(reservaId)}});
            return res.status(200).json('Deletado');
        } catch(err){
            return res.status(500).json(err.message);
        }
    }
    
    static async atualizaReserva(req, res){
        const{id} = req.params;
        const novasInfos = req.body;
        try{
            const reservaAtualizada = await database.Reservas.update(novasInfos, {where: {id: Number(id)}});
            return res.status(200).json(reservaAtualizada);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }

}

module.exports = MesaController;