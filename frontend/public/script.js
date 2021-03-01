function pageLoad() {
  console.log("The Client is running");

  let form = document.getElementById("uploadForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("We blocked the file upload process");

    let formData = new FormData();
    const file = document.getElementById("userfile");
    const username = document.getElementById("username");

    formData.append("userfile", file.files[0]);
    formData.append("username", username.value);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res)
      .then((result) => {
        console.log("Success:", result);
      })
      // .then((json) => console.log(json))
      .catch((err) => console.error(err));

    /* for (let value of formData.values()) {
      console.log(value);
    } */
  });
}

window.addEventListener("load", pageLoad);
