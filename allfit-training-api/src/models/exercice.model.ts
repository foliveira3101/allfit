import * as mongoose from 'mongoose'
import { GroupSchema} from './group.model'

const Schema = mongoose.Schema

export const ExerciceSchema = new Schema({
    name: {
        type: String,
        required: 'Enter exercice name'
    },    
    group:{
        type: GroupSchema
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