import pool from './database.js'
import eventData from '../data/eventData.js'
import './dotenv.js'

const createEventsTable = async() => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events(
            id SERIAL PRIMARY KEY,
            artist VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL,
            time INT NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `

    try{
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    }
    catch(error)
    {
        console.error('⚠️ error creating events table', error)
    }
}

const seedEventsTable = async () => {
    await createEventsTable()
    eventData.forEach(event => {
        const insertQuery = {
            text:'INSERT INTO events (artist, type, time, image) VALUES ($1, $2, $3, $4)'
        }
        const values = [
            event.name,
            event.type,
            event.time,
            event.image
        ]
        pool.query(insertQuery, values, (err, res) => {
            if(err)
            {
                console.error('⚠️ error inserting event', err)
                return
            }
            console.log(`✅ ${event.name} added successfully`)
        });
    });
}
seedEventsTable()