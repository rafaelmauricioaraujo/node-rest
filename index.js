const customExpress = require("./config/customExpress");
const conn = require("./infra/connection");
const tables = require("./infra/tables");
const app = customExpress();

conn.connect((err) => {
  if (err) console.log(err);
  tables.init(conn);
  app.listen(3000, () => {
    console.log("listen on port 3000");
  });
});
