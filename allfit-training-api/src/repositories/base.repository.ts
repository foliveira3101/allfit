
import * as mongoose from 'mongoose'

export abstract class BaseRepository<D extends mongoose.Document>  { 

    pageSize: number = 2


    constructor(protected model: mongoose.Model<D>) {        
       
    }

    protected prepareOne(query: mongoose.DocumentQuery<D,D>): mongoose.DocumentQuery<D,D>{
        return query
    }


    public findAll() : Promise<D[]> {

        return this.model.find()
            .then((documents) => documents)
            .catch((error) => {
                throw new Error(error)
            })      
    }

    public findById(id: any) : Promise<D> {

        return this.model.findById(id)
            .then((document) => document)
            .catch((error) => {
                throw new Error(error)
            })      
    }

    public save(document: D) : Promise<D> {

        document = new this.model(document)

        return document.save()
            .then((result) => result)
            .catch((error) => {
                throw new Error(error)
            })
    }


    // findAll = (req, resp, next)=>{
    //     let page = parseInt(req.query._page || 1)
    //     page = page > 0 ? page : 1
    
    //     const skip = (page - 1) * this.pageSize
    
    //     this.model
    //         .count({}).exec()
    //         .then(count=>this.model.find()
    //             .skip(skip)
    //             .limit(this.pageSize)
    //             .then((documents) => {
    //                 return resp.json(documents, {
    //                     page, count, pageSize: this.pageSize, url: req.url
    //                 })
    //             })
    //             .catch(next))                                     
    // }



    // findById = (req, resp, next)=>{
    //     this.prepareOne(this.model.findById(req.params.id))
    //         .then((document) => {
    //             if(document) {                    
    //                 return document                    
    //             } else {
    //                 console.log('Documento não encontrado')
    //                 //throw new NotFoundError('Documento não encontrado')
    //             }
    //             return next(false)
    //         })
    //         .catch(next)
    // }

    // save = (req, resp, next)=> {
    //     let document = new this.model(req.body)
    //     document.save()
    //         .then((document) => document)
    //         .catch(next)
    // }

    // update = (req, resp, next)=>{
    //     const options = {runValidators: true, new : true}
    //     this.model.findByIdAndUpdate(req.params.id, req.body, options)
    //         .then((document) => document)
    //         .catch(next)
    // }
    
    // delete = (req, resp, next)=>{
    //     this.model.remove({_id:req.params.id}).exec().then((cmdResult: any)=>{
    //         if(cmdResult.result.n) {
    //             resp.send(204)
    //         } else {
    //             console.log('Documento não encontrado')
    //             //throw new NotFoundError('Documento não encontrado')
    //         }
    //         return next()
    //     })
    //     .catch(next)
    // }

   
}
