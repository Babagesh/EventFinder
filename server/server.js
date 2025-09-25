import express from 'express'
import eventsRouter from './routes/eventsRouter.js'

const app = express()
const PORT = process.env.PORT || 3001

// app.use(express.static('../client/public')) technically only for production / build mode

app.use('/events', eventsRouter)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})


