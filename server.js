/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tripelbil:<password>@cluster0-mfk2y.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

/*
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://azizjarrar:<a1z2e3a4>@cluster0-mfk2y.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(uri,{ useNewUrlParser: true } ,function(err, client) {
    console.log(client)
    if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }

});
*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://unha:unha280198@cluster0-mfk2y.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {
if(err){
    throw err;
}else{
    console.log("connextion secc");
}
});





    /*
const password ="a1z2e3a4"
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tripelbil:"+password+"@cluster0-mfk2y.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
if(err){
    throw err;
}
});
*/