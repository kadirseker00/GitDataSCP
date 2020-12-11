try {
   db.Pull_request_comments.deleteMany( {user:null} );
} catch (e) {
   print (e);
}