const conn = require("../infra/connection");

class Service {
  newService(data) {
    const sql = "insert into services set ?";

    conn.query(sql, data, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
}

module.exports = new Service();
