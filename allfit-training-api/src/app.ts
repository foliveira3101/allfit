import * as express from "express"
import *  as bodyParser from "body-parser"
import * as https from 'https'
import * as fs from 'fs'
import { db } from './config/db'
import  { Auth } from './config/auth'

const passport = new Auth().Passport()

class App {

    private database: db

    public app: express.Application    
    public port: number
    
    constructor(routes, port) {
        this.app = express()
        this.port = port
        this.config()              
        this.initializeRoutes(routes)                

        this.database = new db()
        this.database.createConnection()
    }
   
    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json())
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }))   
        
        //cors
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept")
            next()
        })

        //passport
        this.app.use(passport.initialize())        
    }

    private initializeRoutes(routes) : void {
        routes.forEach((routes) => {
            this.app.use('/', routes.router);
          });
    }

    public closedataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback())
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });

        https.createServer({
            key: fs.readFileSync('./src/certs/key.pem'),
            cert: fs.readFileSync('./src/certs/certificate.pem'),
            passphrase: 'rVSO1802'
        }, this.app)
        .listen(7001);


    }

}

export default App