import * as mongoose from 'mongoose'

export interface Group extends mongoose.Document {
    name: string,
    createdAt: Date
}

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Enter group name'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Group = mongoose.model<Group>('Group', groupSchema)