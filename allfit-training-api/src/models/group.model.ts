import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const GroupSchema = new Schema({
    name: {
        type: String,
        required: 'Enter group name'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})