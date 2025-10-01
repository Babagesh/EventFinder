import dotenv from 'dotenv'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const filename = fileURLToPath(import.meta.url)
const dirname = dirname(filename)

dotenv.config({
    path: join(dirname, '../.env')
})