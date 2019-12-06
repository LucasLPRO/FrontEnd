window.addEventListener("load", genererTableauAnimaux);

function genererTableauAnimaux() {
    var table = document.getElementById("tableauAnimaux");
    var i;
    var j;
    for (i = 0; i < jsonAnimaux.Animal.length; i++) {
        var tr = document.createElement('tr');
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
        
        //Bouton
        var tdButton = document.createElement('button');
        tdButton.type= "button";
        tdButton.name = "button";
        tdButton.className = "button";
        var tdButtonTexte = document.createTextNode("Découvrir");
        tr.appendChild(tdButton);
        tdButton.appendChild(tdButtonTexte);       
    }
}