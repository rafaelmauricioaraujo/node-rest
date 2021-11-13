class Tables {
  init(conn) {
    this.conn = conn;
    this.createService();
  }

  createService() {
    const sql = `create table if not exists services (
      id int not null auto_increment, 
      client varchar(100) not null, 
      pet varchar(50),
      service varchar(100) not null,
      status varchar(50) not null,
      primary key(id)
      )`;
    this.conn.query(sql, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("tables created");
      }
    });
  }
}

module.exports = new Tables();
