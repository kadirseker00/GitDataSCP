db.test.aggregate( [ 
  { 
      $addFields: { 
          hasPullRequest: { 
             $cond: [ 
                 { $and: [ 
                        { $eq: [ "$pull_request.diff_url", null ] },
                        { $eq: [ "$pull_request.patch_url", null ] },
                        { $eq: [ "$pull_request.html_url", null ] }
                 ] },
                 false, 
                 true 
             ] 
          } 
      } 
  }
] ).pretty()