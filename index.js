const button = document.querySelector("#button");
const jelszo = document.querySelector("#jelszo");
const jelszo2 = document.querySelector("#jelszo2");
const form = document.querySelector("form");

button.addEventListener("click", () =>
  checkPasswords(jelszo.value, jelszo2.value)
);

function checkPasswords(jelszo, jelszo2) {
  if (jelszo == "") {
    alert("Adj meg egy jelszót!");
  } else {
    return jelszo === jelszo2
      ? console.log("Form benyújtva!")
      : alert("A két jelszónak egyeznie kell");
  }
}
