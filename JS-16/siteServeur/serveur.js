const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require("./routeur");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/biblio2", {useNewUrlParser:true,useUnifiedTopology:true});

const livreSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    nom: String,
    auteur: String,
    pages : Number
})
const livreModel = mongoose.model("Livre",livreSchema);

livreModel.find()
    .exec()
    .then(livres => {
        console.log(livres)
    })
    .catch();

server.use(express.static("public"))
server.use(morgan("dev"));
server.use("/",router);

server.listen(3000);

