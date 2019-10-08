import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ExerciceSchema = new Schema({
    name: {
        type: String,
        required: 'Enter exercice name'
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