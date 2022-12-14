const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to     for the _id.
const ObjectId = require("mongodb").ObjectId;


recordRoutes.route("/posts").get(function (req, res) {
    let { limit = 2, page = 1, user_id } = req.query;
    const skip = (page - 1) * limit;
    let db_connect = dbo.getDb("infini");
    db_connect
        .collection("posts")
        .find({ user_id: 1 })
        .skip(skip)
        .limit(limit)
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recordRoutes.route("/followees-posts").get(function (req, res) {
    let { limit = 2, page = 1 } = req.query;
    const skip = (page - 1) * limit;
    let db_connect = dbo.getDb("infini");
    db_connect
        .collection("posts")
        .aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user_id",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $set: {
                    user: { $arrayElemAt: ["$user", 0] }
                }
            },
            {
                $match: {$or: [{user_id: 2}, {user_id: 3}]}
            }
        ])
        .skip(skip)
        .limit(limit)
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});


// This section will help you get a single record by id
recordRoutes.route("/posts/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("posts")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new record.
recordRoutes.route("/post/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };
    db_connect.collection("posts").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    };
    db_connect
        .collection("records")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = recordRoutes;