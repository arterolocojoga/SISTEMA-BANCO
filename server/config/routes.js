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
            People.index(req).then(result => {
                res.send(JSON.stringify(result))
            })

            res.send(JSON.stringify(People.index(req)))
        })
        express.get('/people/:id', (req, res) => {
            res.send(JSON.stringify(People.get(req)))
        })
        express.post('/people/', (req, res) => {
            res.send(JSON.stringify(People.create(req)))
        })
        express.put('/people/:id', (req, res) => {
            res.send(JSON.stringify(People.update(req)))
        })
        express.delete('/people/:id', (req, res) => {
            res.send(JSON.stringify(People.delete(req)))
        })
    }

    account_routes(express){
        express.get('/account/', (req, res) => {
            res.send(JSON.stringify(Account.index(req)))
        })
        express.get('/account/:id', (req, res) => {
            res.send(JSON.stringify(Account.get(req)))
        })
        express.post('/account/', (req, res) => {
            res.send(JSON.stringify(Account.create(req)))
        })
        express.put('/account/:id', (req, res) => {
            res.send(JSON.stringify(Account.update(req)))
        })
        express.delete('/account/:id', (req, res) => {
            res.send(JSON.stringify(Account.delete(req)))
        })
    }

    transaction_routes(express){
        express.get('/transaction/', (req, res) => {
            res.send(JSON.stringify(Transactions.index(req)))
        })
        express.get('/transaction/:id', (req, res) => {
            res.send(JSON.stringify(Transactions.get(req)))
        })
        express.post('/transaction/', (req, res) => {
            res.send(JSON.stringify(Transactions.create(req)))
        })
        express.put('/transaction/:id', (req, res) => {
            res.send(JSON.stringify(Transactions.update(req)))
        })
        express.delete('/transaction/:id', (req, res) => {
            res.send(JSON.stringify(Transactions.delete(req)))
        })
    }

    agency_routes(express){
        express.get('/agency/', (req, res) => {
            res.send(JSON.stringify(Agency.index(req)))
        })
        express.get('/agency/:id', (req, res) => {
            res.send(JSON.stringify(Agency.get(req)))
        })
        express.post('/agency/', (req, res) => {
            res.send(JSON.stringify(Agency.create(req)))
        })
        express.put('/agency/:id', (req, res) => {
            res.send(JSON.stringify(Agency.update(req)))
        })
        express.delete('/agency/:id', (req, res) => {
            res.send(JSON.stringify(Agency.delete(req)))
        })
    }
            
}
module.exports = Routes;
