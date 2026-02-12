const People = require('../controllers/people');
const Account = require('../controllers/accounts');
const Transactions = require('../controllers/transactions');
const Agency = require('../controllers/agencys');

class Routes {
    constructor(express){
        // criação das rotas get do diretorio home
        this.home_get(express);
        this.people_routes(express);
        this.account_routes(express);
        this.transaction_routes(express);
        this.agency_routes(express);
    }

    home_get(express){
        express.get('/', (req, res) => {
            res.send( 'ta funfando');
        });
    }

    people_routes(express){
        express.get('/people/', (req, res) => {
            res.send(JSON.stringify(People.index(req)))
        })
    }

    account_routes(express){
        express.get('/account/', (req, res) => {
            res.send(JSON.stringify(Account.index(req)))
        })
    }

    transaction_routes(express){
        express.get('/transaction/', (req, res) => {
            res.send(JSON.stringify(Transactions.index(req)))
        })
    }

    agency_routes(express){
        express.get('/agency/', (req, res) => {
            res.send(JSON.stringify(Agency.index(req)))
        })
    }
            
}
module.exports = Routes;
