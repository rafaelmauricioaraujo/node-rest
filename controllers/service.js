module.exports = (app) => {
  app.get("/service", (req, res) => {
    res.send("service started. get endpoint");
  });

  app.post("/service", (req, res) => {
    console.log(req.body);
    res.send("service endpoint, post");
  });
};
