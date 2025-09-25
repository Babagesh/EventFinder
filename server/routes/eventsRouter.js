import express from 'express'
import path from 'path'
import eventData from '../data/eventData.js'
import { fileURLToPath } from 'url'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(eventData)
})

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

router.get('/:eventID', (req,res) => {
    res.status(200).sendFile(path.resolve(dirname, '../public/event.html'))
})

export default router;