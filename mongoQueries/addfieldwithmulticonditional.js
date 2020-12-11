db.getCollection("test").aggregate( [ 
  { 
      $addFields: { 
          hasPullRequest: { 
             $cond: [ 
                 { 
                     $or:
                     [ 
                         { $and: [ 
                            { $eq: [ "$pull_request.diff_url", null ] },
                            { $eq: [ "$pull_request.patch_url", null ] },
                            { $eq: [ "$pull_request.html_url", null ] },
                                 ]
                         },
                         {  $eq:[{ $ifNull: [ "$pull_request", 0 ] },0]  }
                      ]
                  },
                 false, 
                 true 
             ] 
          } 
      } 
  },
  {
        $out: "Issues2"
  }
]
).pretty()

