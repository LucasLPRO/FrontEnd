jQuery(document).ready(function() {
    $( "#tableauVille" ).submit(function( event ) {

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
        if (document.getElementById("btnSubmit").value == "Ajouter une destination") {
            var ajout = window.confirm("Voulez-vous ajouter " + laVille);
            if (ajout) {
                leTab.push(laVille);                
            }
        } else {
            document.getElementById("btnSubmit").value = "Ajouter une destination";
        }
        var leTxt = "Bienvenue en France, il y a aussi : " + afficherTableau(leTab);
        texte.innerHTML = leTxt;
        event.preventDefault();
    } else if (Espagne.includes(laVille)) {
        leTab = Espagne;
        leTab.splice(Espagne.indexOf(laVille), 1);
        var leTxt = "Bienvenue en Espagne, il y a aussi : " + afficherTableau(leTab);
        if (document.getElementById("btnSubmit").value == "Ajouter une destination") {
            var ajout = window.confirm("Voulez-vous ajouter " + laVille);
            if (ajout) {
                leTab.push(laVille);                
            }
        } else {
            document.getElementById("btnSubmit").value = "Ajouter une destination";
        }
        texte.innerHTML = leTxt;
        event.preventDefault();
        document.getElementById("btnSubmit").value = "Ajouter une destination";
    } else if (Italie.includes(laVille)) {
        leTab = Italie;
        leTab.splice(Italie.indexOf(laVille), 1);
        if (document.getElementById("btnSubmit").value == "Ajouter une destination") {
            var ajout = window.confirm("Voulez-vous ajouter " + laVille);
            if (ajout) {
                leTab.push(laVille);                
            }
        } else {
            document.getElementById("btnSubmit").value = "Ajouter une destination";
        }
        var leTxt = "Bienvenue en Italie, il y a aussi : " + afficherTableau(leTab);
        texte.innerHTML = leTxt;
        event.preventDefault();
        document.getElementById("btnSubmit").value = "Ajouter une destination";
    } else if (Allemagne.includes(laVille)) {
        leTab = Allemagne;
        leTab.splice(Allemagne.indexOf(laVille), 1);
        if (document.getElementById("btnSubmit").value == "Ajouter une destination") {
            var ajout = window.confirm("Voulez-vous ajouter " + laVille);
            if (ajout) {
                leTab.push(laVille);                
            }
        } else {
            document.getElementById("btnSubmit").value = "Ajouter une destination";
        }
        var leTxt = "Bienvenue en Allemagne, il y a aussi : " + afficherTableau(leTab);
        texte.innerHTML = leTxt;
        event.preventDefault();
        document.getElementById("btnSubmit").value = "Ajouter une destination";
    } else {
        event.preventDefault();
    }
    });
});

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