import * as mongoose from 'mongoose'
import { Group} from './group.model'

export interface Exercice extends mongoose.Document {
    name: string,
    group: mongoose.Types.ObjectId | Group,
    imagePath: string,
    videoPath: string,
    createdAt: Date
  }

const exerciceSchema = new mongoose.Schema({
    name: {
        type: String        
    },    
    group:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: false
    },    
    imagePath: {
        type: String
    },
    videoPath: {
        type: String        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Exercice = mongoose.model<Exercice>('Exercice', exerciceSchema)




