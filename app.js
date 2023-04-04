const express = require('express');
const mongoose = require('mongoose');
const router= require("./routes/emp-routes");
const route=require("./routes/emp-routes")

const app = express();
//midelway
app.use("/emps",router)//localhost:8000/emps
app.use(express.json());
 

mongoose
  .connect("mongodb+srv://admin:TpZYcEm8Mk3lYSKm@cluster0.idhoqcn.mongodb.net/hardwareStore?retryWrites=true&w=majority")
  .then(() => console.log("Connected to database"))
  .then(() =>{app.listen(8000);
})
.catch((err)=> console.log(err));