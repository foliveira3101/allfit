import { Router } from 'express'
import  { ExerciceController } from  '../controllers/exercice.controller'
import  { Auth } from '../config/auth'

const passport = new Auth().Passport()

export class ExerciceRoutes {

    private path = '/exercices'
    private router = Router()
    private controller = new ExerciceController()

    constructor(){
        this.intializeRoutes()
    }

    public intializeRoutes() {
        // this.router.get(this.path, 
        //     passport.authenticate('oauth-bearer', {session: false}),this.controller.getAll)
        
        this.router.get(this.path , this.controller.getAll)
        this.router.get(this.path + '/:id', this.controller.getById)        
        this.router.post(this.path, this.controller.add)
        // this.router.put(this.path + '/:id', this.controller.update)
        // this.router.delete(this.path + '/:id', this.controller.delete)
    }

}
