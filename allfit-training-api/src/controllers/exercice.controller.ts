import  { ExerciceRepository } from '../repositories/exercice.repository'
import { Request, Response } from 'express'

const repository = ExerciceRepository

export class ExerciceController { 
    
    public getAll (req: Request, res: Response) {
        repository.find({}, (err, exercice) => {
            if(err) {
                res.send(err)
            }
            res.json(exercice)
        })
    }

    public getById(req: Request, res: Response){
        repository.findById(req.params.id, (err, exercice) => {
            if(err) {
                res.send(err)
            }
            res.json(exercice)
        })
    }

    public add (req: Request, res: Response) {                
        let exercice = new ExerciceRepository(req.body);
    
        exercice.save((err, model) => {
            if(err){
                res.send(err);
            }    
            res.json(model);
        });
    }

    public update (req: Request, res: Response) {                
        repository.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, exercice) => {
            if(err){
                res.send(err);
            }
            res.json(exercice);
        });
    }

    public delete (req: Request, res: Response) {                
        repository.Remove({ _id: req.params.id }, (err, exercice) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted exercice!'});
        });
    }
}
