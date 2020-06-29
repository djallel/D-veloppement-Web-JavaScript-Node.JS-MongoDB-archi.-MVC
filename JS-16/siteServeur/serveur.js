var express = require("express");
var server = express();

server.listen(3000);

server.get("/", (requete, reponse) =>{
    console.log("demande recue avec la méthode GET sur l'url /")
    reponse.end("Demande GET reçue")
})

server.get("/test", (requete, reponse) =>{
    console.log("demande recue avec la méthode GET sur l'url /test")
    reponse.end("Demande GET reçue")
})

server.post("/test", (requete, reponse) =>{
    console.log("demande recue avec la méthode POST sur l'url /test")
    reponse.end("Demande POST reçue")
})