import express from 'express'
import eventsRouter from './routes/eventsRouter'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static('../client'))

app.use('/events', eventsRouter)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})


