db.Copy_of_Watchers.aggregate(
    [
        { $group: { _id: { repo_id: "$repo_id", user_id: "$user_id"}, count: { $sum: 1 } } },
        { $match: { count: { $gte: 2 } } },
        { $out: "bbb" }
    ],
    { allowDiskUse: true }
)

