function goToRegister(event) {
  event.preventDefault();
  window.location.href = "register.page.html";
}

function goToHome(event) {
  event.preventDefault();
  window.location.href = "home.page.html";
}

function postItem(event) {
  event.preventDefault();
  baseUrl = "https://localhost:8000";

  const nomeItem = document.getElementById("nome-item");
  const quantidadeItem = document.getElementById("quantidade-item");
  const tipoItem = document.getElementById("tipo-item");
  const StatusItem = document.getElementById("status-item");

  const item = {
    name: nomeItem.value,
    quantity: quantidadeItem.value,
    type: tipoItem.value,
    status: StatusItem.value,
  };

  fetch(baseUrl + "/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => response.json())
    .then(() => {
      getItems();
      nomeItem.value = "";
      quantidadeItem.value = "";
      tipoItem.value = "";
      StatusItem.value + "";
    })
    .catch((error) => console.error("Unable to add item.", error));
}
