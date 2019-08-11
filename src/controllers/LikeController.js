const Dev = require("../models/Dev")

module.exports = {
    async store (req, res) {

        const { targetDevId } = req.params;
        const { fromdevid: fromDevId } = req.headers;

        // Aqui tenho o dev alvo
        const targetDev = await Dev.findById(targetDevId);
        // Dev que deu like
        const fromDev = await Dev.findById(fromDevId);

        // Tratamento se não tiver o dev alvo cadastrado
        if (! targetDev) {
            return res.status(400)
                .json({error: 'Target doesn`t exists'})
        }

        // Tratamento se não tiver o dev que quer dar like cadastrado
        if (! fromDev) {
            return res.status(400)
                .json({error: 'Logged dev doesn`t exists'})
        }

        if (fromDev.likes.includes(targetDevId) ) {
            return res.status(400)
                .json({message: 'Are you a hacker?'})
        }

        fromDev.likes.push(targetDevId);

        if (targetDev.likes.includes(fromDevId)) {
            console.log('Deu match!! ');
        }

        await fromDev.save();
        
        // Caso eu tiver os dois salvo na lista 
        res.json([
            {message: 'sucesso!!'},
            targetDev,
            fromDev
        ]);
    }
};