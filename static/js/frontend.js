console.log("Test");
var btn = document.getElementById("show");
btn.addEventListener("click", getProducts, false);

function getProducts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = xhttp.responseText;
      var products = data.split(";");

      let list = document.getElementById("list");

      for (let index = 0; index < products.length; index++) {
        let element = document.createElement("li");
        element.innerHTML = products[index];
        list.appendChild(element);
      }
    }
  };
  xhttp.open("GET", "http://localhost:3000/show", true);
  xhttp.send();
}
