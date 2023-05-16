const {bollywood,hollywood,food,fitness,technology}=require("../Controller/data")
const {register,login}=require("../Controller/register")
const verification=require("../middleware/middleware")
const express=require('express')
const route1=express.Router();
route1.post("/login",login)
route1.post("/register",register)
route1.get("/bollywood",verification,bollywood)
route1.get("/hollywood",verification,hollywood)
route1.get("/fitness",verification,fitness)
route1.get("/food",verification,food)
route1.get("/technology",verification,technology)



module.exports=route1