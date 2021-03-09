import React, { useState, useEffect } from "react";
import "./form.css";

async function notLoad() {
  console.log("We blocked the file upload");

  let formData = new FormData();
  let object = {};

  const ls = document.querySelectorAll(".formInput");

  for (let i = 0; i < ls.length; i++) {
    let name = ls[i].getAttribute("id");
    object[`${name}`] = ls[i].value;
  }
  console.log(object);

  formData.append("userdata", JSON.stringify(object));
  formData.append("file", document.getElementById("userfile").files[0]);

  fetch("http://127.0.0.1:8000/upload", {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}

export default function Form() {
  const [upload, setUpload] = useState(false);

  useEffect(() => {
    notLoad();
  }, [upload]);

  return (
    <>
      <div className="App">
        <div class="row">
          <div class="col-75">
            <div class="container">
              <div class="row">
                <div class="col-50">
                  <label for="fname">Full Name</label>
                  <input
                    type="text"
                    id="username"
                    name="firstname"
                    placeholder="John M. Doe"
                    className="formInput"
                  />
                  <label for="file">File upload</label>
                  <input
                    type="file"
                    id="userfile"
                    name="email"
                    placeholder="File for upload"
                  />
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="formInput"
                  />
                  <label for="adr">Address</label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                    className="formInput"
                  />
                  <label for="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    className="formInput"
                  />
                  <label for="state">Other</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Other information"
                    className="formInput"
                  />
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="10001"
                    className="formInput"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          id="submitBtn"
          value="Upload!"
          onClick={() => {
            setUpload(!upload ? true : false);
          }}
        >
          Upload
        </button>
      </div>
    </>
  );
}
