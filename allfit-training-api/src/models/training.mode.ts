import * as mongoose from 'mongoose'
import { ExerciceSchema } from './exercice.model'


const Schema = mongoose.Schema

export const TrainingSchema = new Schema({
    name: {
        type: String,
        required: 'Enter training name'
    },
    exercices:{
        type: [ExerciceSchema]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})