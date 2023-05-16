const express=require("express")
const studentRouter=require('./Routes/Route1')
const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors({
    origin:"*"
}))

app.use('/api/category',studentRouter)
const PORT=9000
app.listen(PORT,()=>{console.log(`server is connected at port: ${PORT}`)});