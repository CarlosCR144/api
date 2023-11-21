import express from 'express'
import { Server } from './models/server.js'


const app = new Server(express)

app.listen(3000)