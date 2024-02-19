import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDb from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/user", userRoutes)

app.get('/', (req, res) => {
  res.send('Hello Enayet')
})

app.listen(PORT, () => {
  connectToMongoDb()
  console.log(`Server is running at ${PORT}`)
})