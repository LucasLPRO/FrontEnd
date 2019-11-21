//window.addEventListener("load", nombreGenere);
window.addEventListener("load", tableauxPays);


function nombreGenere() {
  var nb = Math.floor(Math.random() * 11);

  var valeur = prompt("Choisir un nombre")
  var compteur = 1;
  while (valeur != nb && compteur < 4) {
    if (valeur < nb) {
      var valeur = prompt("C'est plus")
    } else {
      var valeur = prompt("C'est moins")
    }
    compteur++;
  }
  if (compteur < 4) {
    window.alert("C'est gagné ! C'était bien " + nb);
  } else {
    window.alert("Il n'y a que 3 essais, c'est perdu !");
  }

}


//window.addEventListener("submit", tableauxPays);

function tableauxPays() {
  document.getElementById("tableauVille").addEventListener("submit", tableauxPays);

  var France = ['Grenoble', 'Paris', 'Lyon', 'Marseille'];
  var Espagne = ['Madrid', 'Barcelone', 'Valence', 'Seville'];
  var Italie = ['Milan', 'Rome', 'Turin', 'Venise'];
  var Allemagne = ['Munich', 'Breme', 'Berlin', 'Leipzig'];

  var laVille = document.getElementById('villeSaisie').value;

    if (France.includes(laVille)) {
      window.alert("Bienvenue en France");
    } else if (Espagne.includes(laVille)) {
      window.alert("Bienvenue en Espagne");
    } else if (Italie.includes(laVille)) {
      window.alert("Bienvenue en Italie");
    } else if (Allemagne.includes(laVille)) {
      window.alert("Bienvenue en Allemagne");
    } else {
      event.preventDefault();
    }


}
