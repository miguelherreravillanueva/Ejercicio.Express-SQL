const db = require("../config/database");

const ProductController = {
    
    createProduct(req, res) {
        let sql = `INSERT INTO products (name, price, category_id) values
        ('${req.body.name}', '${req.body.price}', '${req.body.category_id}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Product added...");
        });
    },

    updateProductById(req, res) {
        let sql = `UPDATE product SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Product updated...')
        })
    },

    showProducts(req, res) {
        let sql = `SELECT * FROM products`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },

    showAll(req, res) {
        let sql = `SELECT * FROM categories INNER JOIN products`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },

    selectProductById(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    },

    showByIdDesc(req, res) {
        let sql = `SELECT * FROM products ORDER BY id DESC`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    },

    selectProductByName(req, res) {
        let sql = `SELECT * FROM products WHERE name = '${req.params.name}'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    },

    deleteProductById(req, res) {
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Product deleted");
        })
    },
}

module.exports = ProductController