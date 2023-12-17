import mysql from "mysql2";

require("dotenv").config();

function pingDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (databaseUrl) {
    let dbConnection = mysql.createConnection(databaseUrl);

    dbConnection.connect((err) => {
      if (err) {
        console.error("Error connecting to the database:", err);
      } else {
        console.log("Connected to PlanetScale!");
        dbConnection.end();
      }
    });
  }
}
export default pingDb;
