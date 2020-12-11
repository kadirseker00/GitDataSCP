db.commits.aggregate([
    {
        $addFields:
            {
                full_name: {
                    $concat: [
                        { $arrayElemAt: [{ $split: ["$url", "/"] }, 4] },
                        "/",
                        { $arrayElemAt: [{ $split: ["$url", "/"] }, 5] }
                    ]
                }
            }
    },
    { $out: "commits" }
]);
