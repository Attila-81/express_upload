const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

const PORT = 8000;
//Itt a /form az URL végét jelenti. Ha a böngésző címsorába beírjuk a /form végződést, akkor megnyitja az index.html-t, ami az alább jelölt helyen van.
app.use("/form", express.static(__dirname + "/../frontend/index.html"));
//Itt a /pub nem URL végződés, hanem megadja a hátul lévő fájl helyét, azaz az index.html-ben elég a /pub-bal hivatkozni a script.js helyére. Nem kell az egész elérési utat beírni az index.html-be, azaz el tudjuk rejteni a felhsználók elől a script.js valódi helyét.
app.use("/pub", express.static(__dirname + "/../frontend/public/script.js"));

//app.use("/hello", express.static(__dirname + "/../frontend/hello.html"));
//app.use(express.static("/../frontend"));
//app.use(express.static("public"));

// default options
app.use(fileUpload());

app.get("/ping", function (req, res) {
  res.send("pong");
});

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }

  console.log("req.files >>>", req.files); // eslint-disable-line

  sampleFile = req.files.userfile;

  uploadPath = __dirname + "/uploads/" + sampleFile.name;

  sampleFile.mv(uploadPath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send("File uploaded to " + uploadPath);
  });
});

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT); // eslint-disable-line
});
