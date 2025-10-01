import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import EventsController from '../controller/events.js'

const router = express.Router()

router.get('/', EventsController.getGifts)

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


router.get('/:eventID', (req,res) => {
    res.status(200).sendFile(path.resolve(dirname, '../../client/public/event.html'))
})

export default router;