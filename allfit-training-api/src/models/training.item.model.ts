import * as mongoose from 'mongoose'
import { Exercice } from './exercice.model'


export interface TrainingItem extends mongoose.Document {
    exercice: mongoose.Types.ObjectId | Exercice,
    series: number,
    repeats: number,
    recoveryTime: number,
    createdAt: Date
}

const trainingItemSchema = new mongoose.Schema({
    exercice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercice',
        required: true    
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

export const TrainingItem = mongoose.model<TrainingItem>('TrainingItem', trainingItemSchema)

