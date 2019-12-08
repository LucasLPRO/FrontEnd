window.addEventListener("load", genererTableauAnimaux);
window.addEventListener("load", adminTableau);


function genererTableauAnimaux() {
    var table = document.getElementById("tableauAnimaux");
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
        var tdButton = document.createElement('button');
        tdButton.type= "button";
        var tdButtonTexte = document.createTextNode("Découvrir");
        tr.appendChild(tdButton);
        tdButton.appendChild(tdButtonTexte);
        
        var tdBtnSuppr = document.createElement('button');
        tdBtnSuppr.type = "button";
        tdBtnSuppr.id = "btnSuppr";
        var tdBtnSuppTxt = document.createTextNode("Supprimer");
        tr.appendChild(tdBtnSuppr);
        tdBtnSuppr.appendChild(tdBtnSuppTxt);
       //tdBtnSuppr.onclick = onClickBtSuppr();
       //tdBtnSuppr.onclick = "this.parentNode.parentNode.parentNode.deleteRow(this.parentNode.parentNode.rowIndex)";
    }
}

function adminTableau() {
   // document.getElementById("btnSuppr").addEventListener("click", onClickBtSuppr(document.getElementById("montableau" ).rowIndex));
  document.getElementById("btnSuppr").addEventListener("click", onClickBtSuppr);
}

function onClickBtSuppr() {
//    document.getElementById("tableauAnimaux").deleteRow(3);
//    window.alert("click");

//  document.getElementById('tableau').deleteRow(ligne.rowIndex);
// 
//  var tableau = document.getElementById('tableau');
//  var trs = tableau.rows;
//  var n = trs.length;
//  var i;
// 
//  alert(n);
//  for (i = 1; i < n; i++)
//  {
//    trs[i].cells[0].innerHTML = trs[i].rowIndex;
//  }
    $("table").find("#remove").on ("click", function (){
$(this).closest('tr').remove();
});

}