import * as mongoose from 'mongoose'
import { TrainingItemSchema} from './training.item.model'


const Schema = mongoose.Schema

export const TrainingSchema = new Schema({
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
        type: [TrainingItemSchema]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})