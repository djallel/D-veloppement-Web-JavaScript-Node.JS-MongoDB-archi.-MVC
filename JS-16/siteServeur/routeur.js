var express = require("express");
var routeur = express.Router();

routeur.get("/", (requete, reponse) =>{
    console.log("Page d'accueil demandée")
    reponse.end("Page d'accueil demandée")
})

routeur.get("/test", (requete, reponse) =>{
    console.log("demande recue avec la méthode GET sur l'url /test")
    reponse.end("Demande GET reçue")
})

routeur.post("/test", (requete, reponse) =>{
    console.log("demande recue avec la méthode POST sur l'url /test")
    reponse.end("Demande POST reçue")
})

routeur.use((requete,reponse,suite) => {
    const error = new Error("Page non trouvée");
    error.status= 404;
    suite(error);
})

routeur.use((error,requete,reponse) => {
    reponse.status(error.status || 500);
    reponse.end(error.message);
})

module.exports = routeur;