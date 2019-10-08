import * as mongoose from 'mongoose'
import { ExerciceSchema } from '../models/exercice.model'

export const ExerciceRepository = mongoose.model('Exercice', ExerciceSchema)