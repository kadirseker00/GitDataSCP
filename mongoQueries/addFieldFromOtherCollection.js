db.commit_comments.aggregate([
   {
      $lookup: {
         from: "repos",
          let: { item: "$fullname" },
           pipeline: [
              { $match:
                 { $expr:
                         { $eq: [ "$fullname",  "$$item" ] },                            
                 }
              },
              { $project: { "id": 1 } }
           ],
         as: "fromItems"
      }
   },
   {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }
   },
   { $project: { 'fromItems': 0 } },
   { $out:"commit_comments"}
])