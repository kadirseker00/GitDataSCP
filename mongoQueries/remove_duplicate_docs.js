db.getCollection("filteredIssues3").aggregate([
{
    // only match documents that have this field
    // you can omit this stage if you don't have missing fieldX
    $match: {"issue_id": {$nin:[null]}}  
},
{
    $group: { "_id": "$issue_id", "doc" : {"$first": "$$ROOT"}}
},
{
    $replaceRoot: { "newRoot": "$doc"}
},
{$out: "filteredIssues4"}
],
{allowDiskUse:true}
)
