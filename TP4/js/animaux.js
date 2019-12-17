window.addEventListener("load", genererTableauAnimaux);
window.addEventListener("load", ajouterUneLigne);
var table = document.getElementById("bodyTableau");

function genererTableauAnimaux() {
    var i;
    for (i = 0; i < jsonAnimaux.Animal.length; i++) {
        var tr = document.createElement('tr');
        tr.id = "ligne" + i;
        tr.className = "ligneTableau";
        table.appendChild(tr);
        //Nom
        var tdNom = document.createElement('td');
        var tdTextNom = document.createTextNode(jsonAnimaux.Animal[i].nom);
        tr.appendChild(tdNom);
        tdNom.appendChild(tdTextNom);
        
        //Description
        var tdDesc = document.createElement('td');
        tdDesc.className = "description";
        var tdTextDesc = document.createTextNode(jsonAnimaux.Animal[i].description);
        tr.appendChild(tdDesc);
        tdDesc.appendChild(tdTextDesc);
        
        //Pays
        var tdPays = document.createElement('td');
        var tdTextPays = document.createTextNode(jsonAnimaux.Animal[i].pays);
        tr.appendChild(tdPays);
        tdPays.appendChild(tdTextPays);
        
        //Photo
        var tdPhoto = document.createElement('td');
        var imgPhoto = document.createElement('img');
        imgPhoto.src = jsonAnimaux.Animal[i].photo;
        tr.appendChild(tdPhoto);
        tdPhoto.appendChild(imgPhoto);
        
        //Boutons
        var tdButton = document.createElement('td');
        var Button = document.createElement('button');
        Button.type= "button";
        var tdButtonTexte = document.createTextNode("Découvrir");
        tr.appendChild(tdButton);
        tdButton.appendChild(Button);
        Button.appendChild(tdButtonTexte);
        
        var BtnSuppr = document.createElement('button');
        BtnSuppr.type = "button";
        BtnSuppr.id = i;
        var BtnSuppTxt = document.createTextNode("Supprimer");
        tr.appendChild(BtnSuppr);
        BtnSuppr.appendChild(BtnSuppTxt);
        BtnSuppr.onclick = onClickBtSuppr;
        tdButton.appendChild(BtnSuppr);
    }
    
   // addLigneAjouter();
}

function onClickBtSuppr() {
    var id = "ligne" + this.getAttribute('id');
    jQuery(document).ready(function() {
        $("#" + id).remove();
    });
}

function addLigneAjouter() {
    var tr = document.createElement('tr');
    tr.className = "ligneTableau";
    table.appendChild(tr);
    
    //Nom
    var tdNom = document.createElement('td');
    var tdTextNom = document.createTextNode("Nom :");
    var inputNom = document.createElement('input');
    tdNom.appendChild(tdTextNom);
    tr.appendChild(tdNom);
    inputNom.type = "text";
    inputNom.id = "nouveau-nom";
    tdNom.appendChild(inputNom);
    
    //Description
    var tdDesc = document.createElement('td');
    var tdTextDesc = document.createTextNode("Description :");
    var inputDesc = document.createElement('input');
    tdDesc.appendChild(tdTextDesc);
    tr.appendChild(tdDesc);
    inputDesc.type = "text";
    inputDesc.id = "nouveau-desc";
    tdDesc.appendChild(inputDesc);
    
    //Pays
    var tdPays = document.createElement('td');
    var tdTextPays = document.createTextNode("Pays :");
    var inputPays = document.createElement('input');
    tdPays.appendChild(tdTextPays);
    tr.appendChild(tdPays);
    inputPays.type = "text";
    inputPays.id = "nouveau-pays";
    tdPays.appendChild(inputPays);
    
    //Photo
    var tdPhoto = document.createElement('td');
    var tdTextPhoto = document.createTextNode("Photo :");
    var inputPhoto = document.createElement('input');
    tdPhoto.appendChild(tdTextPhoto);
    tr.appendChild(tdPhoto);
    inputPhoto.type = "file";
    inputPhoto.id = "nouveau-photo";
    tdPhoto.appendChild(inputPhoto);
    
    //Boutons
    var tdBouton = document.createElement('td');
    var tdTextBouton = document.createTextNode("");
    var inputBouton = document.createElement('input');
    tdBouton.appendChild(tdTextBouton);
    tr.appendChild(tdBouton);
    inputBouton.type = "button";
    inputBouton.value = "Valider l'ajout";
    inputBouton.id = "ajoutd-ligne";
    tdBouton.appendChild(inputBouton);
}


//GESTION AJOUT D'UNE LIGNE AU TABLEAU
function ajouterUneLigne() {
    $('#ajout-ligne').click(function() {
        var nom = document.getElementById("nouveau-nom").value;
        var desc = document.getElementById("nouvelle-desc").value;
        var pays = document.getElementById("nouveau-pays").value;
        var photo = document.getElementById("nouvelle-photo").value;    

        var tr = document.createElement('tr');
        tr.id = "ligne" + jsonAnimaux.length;
        tr.className = "ligneTableau";
        table.appendChild(tr);
        //Nom
        var tdNom = document.createElement('td');
        var tdTextNom = document.createTextNode(nom);
        tr.appendChild(tdNom);
        tdNom.appendChild(tdTextNom);

        //Description
        var tdDesc = document.createElement('td');
        tdDesc.className = "description";
        var tdTextDesc = document.createTextNode(desc);
        tr.appendChild(tdDesc);
        tdDesc.appendChild(tdTextDesc);

        //Pays
        var tdPays = document.createElement('td');
        var tdTextPays = document.createTextNode(pays);
        tr.appendChild(tdPays);
        tdPays.appendChild(tdTextPays);

        //Photo
        var tdPhoto = document.createElement('td');
        var imgPhoto = document.createElement('img');
        imgPhoto.src = photo;
        tr.appendChild(tdPhoto);
        tdPhoto.appendChild(imgPhoto);

        //Boutons
        var tdButton = document.createElement('td');
        var Button = document.createElement('button');
        Button.type= "button";
        var tdButtonTexte = document.createTextNode("Découvrir");
        tr.appendChild(tdButton);
        tdButton.appendChild(Button);
        Button.appendChild(tdButtonTexte);

        var BtnSuppr = document.createElement('button');
        BtnSuppr.type = "button";
        BtnSuppr.id = jsonAnimaux.length;
        var BtnSuppTxt = document.createTextNode("Supprimer");
        tr.appendChild(BtnSuppr);
        BtnSuppr.appendChild(BtnSuppTxt);
        BtnSuppr.onclick = onClickBtSuppr;
        tdButton.appendChild(BtnSuppr);
    }); 
}
