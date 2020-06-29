var express = require("express");
var server = express();

server.listen(3000);

server.use("/", function(requete, reponse){
    console.log("Reception d'un demande cliente");
    console.log(requete.path);
    reponse.end("bonjour Client");
})