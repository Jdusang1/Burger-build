var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log(data);
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body)
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    console.log(req.params.id);
    burger.update({
        devoured: req.body.devoured

    }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;