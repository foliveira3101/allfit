// src/config/db.ts

import * as mongoose from 'mongoose'

const config = Object.freeze({
    dev: { database: 'allfit-dev' },
    test: { database: 'allfit-test' },
    prod: { database: 'allfit' }
  })
  
const database = config[process.env.NODE_ENV]
    ? config[process.env.NODE_ENV].database
    : config.dev.database


export class db {

  private DB_URI = `mongodb://localhost/${database}`
  private DB_CONNECTION

  constructor() {   
  }

  createConnection(): void {
    mongoose.Promise = global.Promise
    mongoose.connect(this.DB_URI)
    this.logger(this.DB_URI)
  }

  logger(uri) {
    this.DB_CONNECTION = mongoose.connection
    this.DB_CONNECTION.on('connected', () => console.log(`Moogose is connected in ${uri}`))
    this.DB_CONNECTION.on('error', error => console.error.bind(console, `Connection Error: ${error}`))
    this.DB_CONNECTION.on('disconnected', () => console.log(`Moogose is disconnected in ${uri}`))
  }

  closeConnection(message, callback) {
    this.DB_CONNECTION.close(() => {
        console.log(`Mongoose was desconeted by: ${message}`)
        callback()
    })
  }

}


