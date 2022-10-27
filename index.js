const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/database")

app.use(express.json());
// app.use("/products",require("./routes/products"));
// app.use("/categories",require("./routes/categories"));

app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE ejercicioExpressSQL";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send("Database created...");
    });
});

app.get("/createTableCategories", (req, res) => {
    let sql =
        "CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send("Categories table created...");
    });
});

app.get("/createTableProducts", (req, res) => {
    let sql =
        "CREATE TABLE products(id int AUTO_INCREMENT,name VARCHAR(255), price VARCHAR(255), category_id INT, PRIMARY KEY(id), FOREIGN KEY(category_id) REFERENCES categories(id))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send("Products table created...");
    });
});


app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));