import * as mongoose from 'mongoose'
import { ExerciceSchema } from './exercice.model'

const Schema = mongoose.Schema

export const TrainingItemSchema = new Schema({
    exercice: {
        type: ExerciceSchema,        
    },
    series:{
        type: Number
    },
    repeats:{
        type: Number
    },
    recoveryTime:{
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})