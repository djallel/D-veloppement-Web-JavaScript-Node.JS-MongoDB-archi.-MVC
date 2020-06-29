const table = document.querySelector("#tableauLivres");

var l1 = {
    nom : "L'algorithmique selon H2PROG",
    auteur : "Matthieu GASTON",
    pages : 200
}
var l2 = {
    nom : "La france du 19ème",
    auteur : "Albert PATRICK",
    pages : 500
}
var l3 = {
    nom : "La monde des animaux",
    auteur : "Marc Merlin",
    pages : 250
}
var l4 = {
    nom : "Le virus D'Asie",
    auteur : "Tya Milo",
    pages : 120
}

var biblio = [l1,l2,l3,l4];
afficherLivres();

function afficherLivres(){
    var tableauLivres = document.querySelector("#tableauLivres tbody");
    var livres = "";
    for (i = 0 ; i <= biblio.length -1 ; i++){
        livres += `<tr>
                <td>${biblio[i].nom}</td>
                <td>${biblio[i].auteur}</td>
                <td>${biblio[i].pages}</td>
                <td><button class="btn btn-warning">Modifier</button></td>
                <td><button class="btn btn-danger">Supprimer</button></td>
            <tr/>`;
    }
    tableauLivres.innerHTML = livres;
}

function ajoutFormulaire(){
    document.querySelector("#ajoutForm").removeAttribute("class");
}

document.querySelector("#validationFormAjout").addEventListener("click", function(event){
    event.preventDefault();
    var titre = document.querySelector("#ajoutForm #titre").value;
    var auteur = document.querySelector("#ajoutForm #auteur").value;
    var pages = document.querySelector("#ajoutForm #pages").value;
    ajoutLivre(titre,auteur,pages);
    const formulaire = document.querySelector("#ajoutForm");
    formulaire.reset();
    formulaire.className = "d-none";
});

function ajoutLivre(titre,auteur,pages){
    var livre = {
        nom : titre,
        auteur : auteur,
        pages : pages
    }
    biblio.push(livre);
    afficherLivres();
}

