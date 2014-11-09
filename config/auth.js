// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '732943060133601', // your App ID
        'clientSecret'  : 'ec89eff141e25398cb2ad2554cd05cd8', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'githubAuth' : {
        'clientID'      : '1e24b756a1371cab10fd', // your App ID
        'clientSecret'  : '84048116d637c5fb6d6eb895c6fb259f8e28717f', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/github/callback'
    },
    
    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    }

//    'googleAuth' : {
//        'clientID'      : 'your-secret-clientID-here',
//        'clientSecret'  : 'your-client-secret-here',
//        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
//    }

};
