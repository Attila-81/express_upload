const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const PORT = 8000;

app.use("/", express.static(__dirname + "../../frontend/build"));

app.get(
  "/uploads",
  express(__dirname + "../../backend/uploads"),
  (req, resp) => {
    resp.status(200).send("ok");
  }
);

// default option, a /form middleware-hez
app.use(fileUpload());

app.post("/upload", function (req, res) {
  let userFile;
  let uploadPath;

  let data = {
    data: req.body.formData,
  };

  userFile = req.files.userFile;

  uploadPath = __dirname + "/uploads/" + req.body.userName;

  userFile.mv(uploadPath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(269).json({ data });
    res.end("\n");
  });
});

//
app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT);
});
