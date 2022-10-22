var express = require ("express")
var path = require ("path")
var app = express ()
var port = process.env.PORT || 3000


function connectionStart (){
    console.log("Server is running on port" + port)
}

app.get ("/", function(req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"))
} )

app.use (express.static('public'))

app.listen (port,connectionStart)