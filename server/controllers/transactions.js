class Transactions{
    static index(){//retorna uma lista de todas as informações
        return[
            {"conta": "123",'valor': 22,}
        ]
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

module.exports = Transactions;