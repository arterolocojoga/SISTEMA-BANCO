class People{
    static index(req){//retorna uma lista de todas as informações
        return[
            {"nome": "Artur",'idade': 22,}
        ]
    }

    get(){// pega apenas 1 registro

    }

    create(){//cria um registro (referente ao metodo post)

    }

    update(){//atualiza registros (referenciado pelo put/patch)

    }

    delete(){//apaga/inativa um registro

    }
}

module.exports = People;