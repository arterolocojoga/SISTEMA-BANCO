const PersonModel = require('../models/person');

class People{
    static async index(req){//retorna uma lista de todas as informações
        let people = await PersonModel.find({})
        return people;
    }

    static get(req){// pega apenas 1 registro
        return[
            {"id": "1",'saldo': 22,}
        ]
    }

    static create(req){//cria um registro (referente ao metodo post)
        return[
            {"id": "1",'saldo': 22,}
        ]
    }

    static update(req){//atualiza registros (referenciado pelo put/patch)
        return[
            {"id": "1",'saldo': 22,}
        ]
    }

    static delete(req){//apaga/inativa um registro
        return[
            {"id": "1",'saldo': 22,}
        ]
    }
}

module.exports = People;