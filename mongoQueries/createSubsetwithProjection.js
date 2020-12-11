db.getCollection("filteredRepos").find({},
    { "id": 1, "full_name": 1 }).forEach(function (doc) {
        db.filteredReposNames.insert(doc);
    });  