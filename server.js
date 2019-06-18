var MongoClient = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;
var http = require('http');
//connect to mongo
var url = "mongodb+srv://unha:unha280198@cluster0-mfk2y.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, { useNewUrlParser: true },function(err, cl) {
if(err){
    throw err;
}else{
    console.log("connextion secc");
    // connect to socket.io
    client.on('connection',(socket)=>{
       let db = cl.db('chat_app');
       let chat = db.collection('chats');
    // Create function to send status
    sendStatus = (s)=>{
        socket.emit('status',s)
    }  
    //Get chats from mongo collection 
    chat.find().limit(100).sort({_id:1}).toArray((err,res)=>{
        if(err){
            throw err
        }else{
            //emit the messages
            socket.emit('output',res)
        }
    });
    //Handle input events
    socket.on('input',(data)=>{
        let name=data.name;
        let message = data.message
        //check for name and message
        if(name == '' || message == ''){
            // send error status
            sendStatus('please enter a name and message');
        }else{
            // insert message
            chat.insert({name:name,message:message},()=>{
                client.emit('output',[data]);
            // send status object
            sendStatus({message:"Message sent",clear:true})
            })  
        }
    });
    // handle clear
    socket.on('clear',()=>{
        //remove all chats from collection
        chat.remove({},()=>{
            // emit clear
            socket.emit('cleard')
        });
     });
    })
}
});
/*
http.createServer((req, res)=>{
    res.write('Hello World!');
}).listen(3000)
*/



