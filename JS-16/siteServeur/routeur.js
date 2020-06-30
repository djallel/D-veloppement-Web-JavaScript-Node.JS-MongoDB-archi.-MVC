var express = require("express");
var routeur = express.Router();
const twig = require("twig");

routeur.get("/", (requete, reponse) =>{
    reponse.render("accueil.html.twig")
})

routeur.get("/livres", (requete, reponse) =>{
    reponse.render("livres/liste.html.twig")
})

routeur.get("/livres/:nom", (requete,reponse) => {
    console.log(requete.params.nom)
    reponse.render("livres/livre.html.twig",{nom:requete.params.nom})
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