import app from './app.js'
import { syncTables } from './db.js'

syncTables()

const PORT = process.env.PORT ?? 3001

app.listen(PORT,()=>{
    //alt + 96 
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
})

