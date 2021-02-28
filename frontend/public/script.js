function pageLoad() {
  console.log("The Client is running");

  let form = document.getElementById("uploadForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("We blocked the file upload process");

    let formData = new FormData();
    const file = document.getElementById("fileInput");
    const username = document.getElementById("username");

    formData.append("file", file.value);
    formData.append("name", username.value);
    console.log(formData);

    for (let value of formData.values()) {
      console.log(value);
    }
  });
}

window.addEventListener("load", pageLoad);
