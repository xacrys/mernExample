//Add library moongose
const mongoose = require('mongoose');

const hostname ="localhost";
const dbname="hr";

exports.connectToMongo = () =>{
    const uri = `mongodb://${hostname}/${dbname}`;
    mongoose.Promise = global.Promise;
    mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DBase Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });
    /*const uri = `mongodb://${hostname}/${dbname}`;
    mongoose.connect(uri, {useNewUrlParser: true});
    mongoose.createConnection(uri, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on("error",console.error.bind(console,"connection error:"));
    db.once('open', function() {
        console.log("Connection with mongo succesful");
    });*/

}