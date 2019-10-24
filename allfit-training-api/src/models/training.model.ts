import * as mongoose from 'mongoose'
import { TrainingItem} from './training.item.model'


export interface Training extends mongoose.Document {
    name: string,
    description: string,
    startAt: Date,
    endAt: Date,
    items: mongoose.Types.ObjectId | TrainingItem,
    createdAt: Date
}

const trainingSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: 'Enter training name'
    },
    description:{
        type: String
    },
    startAt:{
        type: Date,
    },
    endAt:{
        type: Date,
    },
    items:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TrainingItem',
        required: true  
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Training = mongoose.model<Training>('TrainingItem', trainingSchema)