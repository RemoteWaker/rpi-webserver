import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import setupController from "~/controllers/setup-controller";

const app = express()

app.use(cors())
app.use(express.json())

app.use('/setup', setupController)


app.listen(8080, () => {
    console.log("Starting server")
})