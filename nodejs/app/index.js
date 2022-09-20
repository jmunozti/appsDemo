const express = require("express"),
  fs = require("fs"),
  ip = require("ip"),
  PORT = 3000,
  HOST = "0.0.0.0",
  app = express(),
  results = "results/results.txt";

app.set("view engine", "ejs");

const parseResults = (type, res) => {
  const allowedTypes = ["audio", "video", "image"];
  const position = allowedTypes.indexOf(type);

  if (position < 0) {
    return res.status(400).send({
      message: "Invalid type",
    });
  } else {
    fs.readFile(results, "utf8", function (err, contents) {
      const background = type;
      const current_ip = ip.address();

      const data = [
        {
          ip: current_ip,
          type: type,
          count: parseInt(contents.split(" -> ")[1].split(",")[position]),
        },
      ];

      res.render("pages/index", {
        data: data,
        background: background,
      });
    });
  }
};

app.get("/:type", (req, res) => {
  console.log(req.params.type);
  parseResults(req.params.type, res);
});

app.listen(PORT, HOST);
