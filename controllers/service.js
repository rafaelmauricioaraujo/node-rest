const Service = require("../models/service");

module.exports = (app) => {
  app.get("/service", (req, res) => {
    res.send("service started. get endpoint");
  });

  app.post("/service", (req, res) => {
    const data = req.body;
    Service.newService(data);
    res.send("ok");
  });
};
