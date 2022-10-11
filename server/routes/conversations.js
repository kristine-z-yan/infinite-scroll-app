const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/conversations").get(function (req, res) {
    let { limit = 5, page = 1, user_id } = req.query;
    const skip = (page - 1) * limit;

    let db_connect = dbo.getDb("infini");
    db_connect
        .collection("conversations")
        .aggregate([
            {
                $match: {
                    members: { $all : [ 1 ]}
                }
            },
            {
                $lookup: {
                    from: 'users',
                    let: { 'users': '$members' },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $in: [ '$_id', '$$users' ]
                                }
                            }
                        }
                    ],
                    as: 'users'
                }
            },
        ])
        .skip(skip)
        .limit(limit)
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = recordRoutes;