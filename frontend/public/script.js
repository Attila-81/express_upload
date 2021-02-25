function pageLoad() {
  console.log("The Client is running");

  let form = document.getElementById("uploadForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("We blocked the file upload process");
  });
}

window.addEventListener("load", pageLoad);
