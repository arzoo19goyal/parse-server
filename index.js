var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
// var api = new ParseServer({ ... });

// Parse.initialize("parseServer87");
// Parse.serverURL = "http://localhost:1337/parse"

var api = new ParseServer({
    databaseURI: 'mongodb+srv://arzoogoyal87:parsepassword@mycluster.4rdpd.mongodb.net/database?retryWrites=true&w=majority',
    cloud: './cloud/main',
    // appId: 'parseServer87',
    appId: "myAppId",
    masterKey: 'arzoo87goyal',
    serverURL: "http://localhost:1337/parse"
});

app.use('/parse', api);

var port = 1337;
app.listen(port, function(){
    console.log('parse-server-example running on port ' + port + '.');
});




// mongodb+srv://arzoogoyal87:<password>@mycluster.4rdpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// parse-server --appId parseServer87 --masterKey arzoo87goyal --databaseURI mongodb://localhost/test
