window.addEventListener("load", genererVille);

function genererListeDeroulante() {
    var France = ['Grenoble', 'Paris', 'Lyon', 'Marseille'];
    var Espagne = ['Madrid', 'Barcelone', 'Valence', 'Seville'];
    var Italie = ['Milan', 'Rome', 'Turin', 'Venise'];
    var Allemagne = ['Munich', 'Breme', 'Berlin', 'Leipzig'];
    var tableauDeVilles = [France, Espagne, Italie, Allemagne];

    document.tableauVille.liste.options.length = tableauDeVilles.length * 4 - 1;
    //var doc = document.tableauVille.liste;
    var j = 0;

    for (var i = 0; i < tableauDeVilles.length; i++) {
        var leTableau = tableauDeVilles[i];
        for (var j = 0; j < leTableau.length; j++) {
            if (i === 0) {
                document.tableauVille.liste.options[j].text = leTableau[j];
            } else if (i === 1) {
                document.tableauVille.liste.options[j + 4].text = leTableau[j];
            } else if (i === 2) {
                document.tableauVille.liste.options[j + 8].text = leTableau[j];
            } else if (i === 3) {
                document.tableauVille.liste.options[j + 12].text = leTableau[j];
            }
        }
    }
}

function genererVille() {
    document.getElementById("tableauVille").addEventListener("submit", tableauxPays);
}
    
function tableauxPays() {
  var France = ['Grenoble', 'Paris', 'Lyon', 'Marseille'];
  var Espagne = ['Madrid', 'Barcelone', 'Valence', 'Seville'];
  var Italie = ['Milan', 'Rome', 'Turin', 'Venise'];
  var Allemagne = ['Munich', 'Breme', 'Berlin', 'Leipzig'];
  var leTab = [];
  var laVille = document.getElementById('villeSaisie').value;

    var texte = document.getElementById("Destination");
    if (France.includes(laVille)) {
        leTab = France;
        leTab.splice(France.indexOf(laVille), 1);
        var leTxt = "Bienvenue en France, il y a aussi : " + afficherTableau(leTab);
        texte.innerHTML = leTxt;
        event.preventDefault();
        document.getElementById("btnSubmit").value = "Ajouter une destination";
    } else if (Espagne.includes(laVille)) {
        leTab = Espagne;
        leTab.splice(Espagne.indexOf(laVille), 1);
        var leTxt = "Bienvenue en Espagne, il y a aussi : " + afficherTableau(leTab);
        texte.innerHTML = leTxt;
        event.preventDefault();
        document.getElementById("btnSubmit").value = "Ajouter une destination";
    } else if (Italie.includes(laVille)) {
        leTab = Italie;
        leTab.splice(Italie.indexOf(laVille), 1);
        var leTxt = "Bienvenue en Italie, il y a aussi : " + afficherTableau(leTab);
        texte.innerHTML = leTxt;
        event.preventDefault();
        document.getElementById("btnSubmit").value = "Ajouter une destination";
    } else if (Allemagne.includes(laVille)) {
        leTab = Allemagne;
        leTab.splice(Allemagne.indexOf(laVille), 1);
        var leTxt = "Bienvenue en Allemagne, il y a aussi : " + afficherTableau(leTab);
        texte.innerHTML = leTxt;
        event.preventDefault();
        document.getElementById("btnSubmit").value = "Ajouter une destination";
    } else {
        event.preventDefault();
    }
}

function afficherTableau(tableau) {
    var res = "";
    for (i = 0; i < tableau.length; i++) {
       res += " " + tableau[i]; 
    }
    return res;
//    for (i = 0; i < tableau.length; i++) {
//        document.getElementById('laListe').innerHTML += "<li>" + tableau[i] + "</li>";
//    }
}   