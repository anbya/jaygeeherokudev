require('dotenv').config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get("/", function(req,res){
    res.send(`Hello World dari jaygeehroku API on port:${PORT}`);
})
app.get("/test", function(req,res){
    res.send(`test page dari jaygeehroku API on port:${PORT}`);
})
app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`);
});