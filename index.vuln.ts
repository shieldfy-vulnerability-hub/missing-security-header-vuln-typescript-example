import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";

let app = express()

app.use(helmet({
    frameguard: false,
    hsts: false,
    noSniff: false,
    xssFilter: false
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const port = 3000



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))