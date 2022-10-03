const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


recordRoutes.route("/stories").get(function (req, res) {
    let db_connect = dbo.getDb("infini");
    db_connect
        .collection("stories")
        .aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user_id",
                    foreignField: "_id",
                    as: "user",
                }
            },
            {
                $set: {
                    user: { $arrayElemAt: ["$user", 0] }
                }
            }
        ])
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single record by id
recordRoutes.route("/stories/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("posts")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = recordRoutes;