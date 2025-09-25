import express from 'express'
import eventsRouter from ''

const app = express()
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})


app.use('/events', eventsRouter)
