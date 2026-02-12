class Account{
    static index(){//retorna uma lista de todas as informações
        return[
            {"id": "1",'saldo': 22,}
        ]
    }

    static get(){// pega apenas 1 registro
        return[
            {"id": "1",'saldo': 22,}
        ]
    }

    static create(){//cria um registro (referente ao metodo post)
        return[
            {"id": "1",'saldo': 22,}
        ]
    }

    static update(){//atualiza registros (referenciado pelo put/patch)
        return[
            {"id": "1",'saldo': 22,}
        ]
    }

    static delete(){//apaga/inativa um registro
        return[
            {"id": "1",'saldo': 22,}
        ]
    }
}

module.exports = Account;