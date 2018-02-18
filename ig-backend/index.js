import express from 'express'
import bodyParser from 'body-parser'
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express'
import {makeExecutableSchema} from 'graphql-tools'

import mongoose from 'mongoose'
import models from './models'

import path from 'path'
import {fileLoader, mergeTypes, mergeResolvers} from 'merge-graphql-schemas'
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))
mongoose.Promise = global.Promise

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
const app = express()
const PORT = 3000

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context:{
      models,
      user:{
        _id: 1,
        username: 'bob'
      }
    }}))

app.get(
  '/graphiql',
  graphiqlExpress({endpointURL:'/graphql'})
)

mongoose.connect('mongodb://localhost:27017/instagram-clone').then(
  ()=>{
    console.log('connect to Mongo!')
    app.listen(PORT, ()=>console.log(`running in port ${PORT}`))
  }
)
