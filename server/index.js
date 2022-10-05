const express = require('express')
const mongoose = require('monogoose')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = ('body-parser')
const routesUrls = ('./routes/routes')

const router = express()

router.use(express.json())
router.use(cors())

router.use(bodyParser.json())

dotenv.config()

mongoose.connect(process.env.DATABASE_ACESS, () => console.log("database connected"))

router.use("/app, routesUrls")

router.listen(3001, () => {
    console.log("connected to port 3001")
})