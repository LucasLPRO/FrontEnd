window.addEventListener("load", genererTableauAnimaux);
window.addEventListener("load", adminTableau);


function genererTableauAnimaux() {
    var table = document.getElementById("bodyTableau");
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
        //BtnSuppr.id = "btnSuppr";
        BtnSuppr.id = "btnSuppr" + i;
        var BtnSuppTxt = document.createTextNode("Supprimer");
        tr.appendChild(BtnSuppr);
        BtnSuppr.appendChild(BtnSuppTxt);
        //BtnSuppr.onclick = deleteRow(this);
        //BtnSuppr.onclick = onClickBtSuppr;
        //BtnSuppr.onclick = onClickBtSuppr(i);
        //BtnSuppr.onclick = onClickBtSuppr;
        tdButton.appendChild(BtnSuppr);
        //tdBtnSuppr.onclick = "this.parentNode.parentNode.parentNode.deleteRow(this.parentNode.parentNode.rowIndex)";
    }
}

function adminTableau() {
   // document.getElementById("btnSuppr").addEventListener("click", onClickBtSuppr(document.getElementById("montableau" ).rowIndex));
  document.getElementById("btnSuppr0").addEventListener("click", onClickBtSuppr(0));
  document.getElementById("btnSuppr1").addEventListener("click", onClickBtSuppr(1));
  document.getElementById("btnSuppr2").addEventListener("click", onClickBtSuppr(2));
  document.getElementById("btnSuppr3").addEventListener("click", onClickBtSuppr(3));
  document.getElementById("btnSuppr4").addEventListener("click", onClickBtSuppr(4));
  document.getElementById("btnSuppr5").addEventListener("click", onClickBtSuppr(5));
  document.getElementById("btnSuppr6").addEventListener("click", onClickBtSuppr(6));
}

function onClickBtSuppr(id) {
//    var ligne = id.substr(id.length);
//    deleteRow(ligne);
//    document.getElementById("tableauAnimaux").deleteRow(id);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    window.alert("click");
//this.parentNode.parentNode.parentNode.deleteRow(this.parentNode.parentNode.rowIndex);
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
//    $("table").find("#remove").on ("click", function (){
//$(this).closest('tr').remove();
//});

}