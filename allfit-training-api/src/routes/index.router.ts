import {Request, Response, Router} from "express"

export class Routes {

    private path = '/'
    private router = Router()
    
    constructor(){
        this.intializeRoutes()
    }

    public intializeRoutes() {
        this.router.get(this.path, (req: Request, res: Response) => {
            res.status(200).send({ 
                message: "Ola Rest API"
            })
        })       
    }
}
