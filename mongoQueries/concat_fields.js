db.getCollection("watchs2").aggregate(
   [
      { $addFields: { full_name: { $concat: [ "$owner", "/", "$repo" ] } } },
      { $out: "watchs2"  }
   ]
);
