db.getCollection("filteredWatchers2").aggregate(
   [
      {$merge : { into : "repos", on: "full_name" }}
   ]
);