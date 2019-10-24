import { Request, Response } from 'express'
import  { ExerciceRepository } from '../repositories/exercice.repository'
import { BaseRepository } from '../repositories/base.repository'
import { Exercice } from '../models/exercice.model'


const repository = new ExerciceRepository(Exercice)

export class ExerciceController { 
    

    public getAll (req: Request, res: Response) {
        
        repository.findAll()
            .then((documents) => {
                res.json(documents)
            })
            .catch((error) => {
                console.log(error)
            })    
    }

    public getById (req: Request, res: Response) {
        
        repository.findById(req.params.id)
            .then((document) => {
                res.json(document)
            })
            .catch((error) => {
                console.log(error)
            })
    
    }

    public add (req: Request, res: Response) {          
                
        repository.save(req.body).then((result) => {
            if(result) {
                res.json(result)
            }
        })
    }

    // public update (req: Request, res: Response) {                
    //     repository.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, exercice) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(exercice);
    //     });
    // }

    // public delete (req: Request, res: Response) {                
    //     repository.Remove({ _id: req.params.id }, (err, exercice) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({ message: 'Successfully deleted exercice!'});
    //     });
    // }
}
