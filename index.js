const express = require("express");
const app = express();
const file = require("express-fileupload");

app.use(file());

app.post("/files", (req, res) => {
  try {
    const file = req.files.img;
    if (file.length) {
      for (var i = 0; i < file.length; i++) {
        file[i].mv("./uploads/" + file[i].name);
      }
      res.json({ success: true });
    } else {
      file.mv("./uploads/" + file.name);
      res.send("suceess");
    }
  } catch (error) {
    res.json({ message: "error" });
  }
});

app.listen(8000, () => {
  console.log("listen");
});
