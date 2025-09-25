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

router.use('/:eventID', (req, res, next) => {
    const eventId = parseInt(req.params.eventID)
    const event = eventData.find(e => e.id === eventId)
    if(!event)
    {
        return res.status(404).sendFile(path.resolve(dirname, '../../client/404error.html'))
    }
    next()
})

router.get('/:eventID', (req,res) => {
    res.status(200).sendFile(path.resolve(dirname, '../../client/event.html'))
})

export default router;