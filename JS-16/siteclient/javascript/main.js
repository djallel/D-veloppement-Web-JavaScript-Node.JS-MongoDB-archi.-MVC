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

var livres = [l1,l2,l3,l4];
for (i = 0 ; i <= livres.length -1 ; i++){
    var livre1 = document.createElement("tr");
    livre1.innerHTML = `<td>${livres[i].nom}</td>
                    <td>${livres[i].auteur}</td>
                    <td>${livres[i].pages}</td>
                    <td><button class="btn btn-warning">Modifier</button></td>
                    <td><button class="btn btn-danger">Supprimer</button></td>`;
    table.appendChild(livre1);
}

function ajoutFormulaire(){
    if(!document.querySelector("#formAjout")){
        var monForm = document.createElement("form");
        monForm.setAttribute("id","formAjout");
        monForm.innerHTML = `
            <fieldset>
                <legend>Création d'un livre</legend>
                <div class="form-group">
                    <label for="titre">Titre</label>
                    <input type="text" class="form-control" id="titre">
                </div>
                <div class="form-group">
                    <label for="auteur">Auteur</label>
                    <input type="text" class="form-control" id="auteur">
                </div>
                <div class="form-group">
                    <label for="pages">Pages</label>
                    <input type="number" class="form-control" id="pages">
                </div>
                <button type="submit" class="btn btn-primary">Valider</button>
            </fieldset>
        `;
        document.querySelector(".container").appendChild(monForm);
    }
   
}

