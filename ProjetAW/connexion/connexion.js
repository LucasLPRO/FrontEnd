const login = $("#login-username-input").val();
const password = $("#login-password-input").val();

$.ajax({
  url: "/connection/index.php",
  data: {login: login, password},
  method: "POST",
  error: console.error,
  success: (response) => {

    if (response.indexOf("Failed") !== -1) {
      // connexion échouée
      setErrorMessage("Nom d'utilisateur ou mot de passe incorrect.")
    } else {
      // connexion réussie
      $('#loginModal').modal('hide');
      $("#login-modal-action").hide();
      localStorage.setItem("user", username);
    }
  },
});

const setErrorMessage = (message) => {
$("#message-erreur").text(message);
};

const clearMessage = () => {
$("#message-erreur").text("");
};

$(() => {
    const storedUser = localStorage.getItem("user");

    $("#login-button").off().click(handleLogin);

    $('#loginModal').on('shown.bs.modal', function () {
      clearMessage();
    })
});


