db.getCollection('repos').aggregate([
    {
        $lookup:
        {
            from: "filteredWatchers",
            localField: "name",
            foreignField : "repo",
            as: "filteredRepo2"
        }
    },
    {
        $match: {
            "filteredRepo2.0": {$exists: true}
        }
    },
    {
        $project: {
            filteredRepo2: 0
        }
    },
    {
        $out: "filteredRepo2"
    }
])