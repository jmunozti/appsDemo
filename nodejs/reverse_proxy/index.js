const express = require("express"),
  PORT = 3000,
  HOST = "0.0.0.0",
  app = express(),
  httpProxy = require("http-proxy"),
  apiProxy = httpProxy.createProxyServer(),
  microservice1 = "http://" + HOST + ":3001",
  microservice2 = "http://" + HOST + ":3002",
  microservice3 = "http://" + HOST + ":3003";

app.all("/", function (req, res) {
  res.sendStatus(200);
});

app.all("/audio", function (req, res) {
  apiProxy.web(req, res, { target: microservice1 });
});

app.all("/video", function (req, res) {
  apiProxy.web(req, res, { target: microservice2 });
});

app.all("/image", function (req, res) {
  apiProxy.web(req, res, { target: microservice3 });
});

app.listen(PORT, HOST);
