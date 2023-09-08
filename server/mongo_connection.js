// const mongoose = require('mongoose')

// mongoose.Promise = global.Promise

// const connectToMongoDBAtlas = (URI, someMsg) => {
//     console.log("[SERVER]: Connecting to MongoDB...: ", someMsg)

//     let mongoConnection = mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })

//     mongoose.connection.once('open', () => {
//         console.log("[SERVER]: Connected to MongoDB.")
//     })

//     mongoose.connection.on('error', (err) => {
//         console.log("[SERVER]: MongoDB error!", err)
//     })

//     return mongoConnection
// }

// module.exports = {
//     connectToMongoDBAtlas
// }
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connectToMongoDBAtlas = (URI, someMsg) => {
    console.log("[SERVER]: Connecting to MongoDB...: ", someMsg);

    let mongoConnection = mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.once('open', () => {
        console.log("[SERVER]: Connected to MongoDB.");
    });

    mongoose.connection.on('error', (err) => {
        console.log("[SERVER]: MongoDB error!", err);
    });

    return mongoConnection;
};

// Replace 'YOUR_MONGODB_ATLAS_URI' with your actual MongoDB Atlas connection URI.
const mongoDBAtlasURI = 'YOUR_MONGODB_ATLAS_URI';

const dbConnection = connectToMongoDBAtlas(mongoDBAtlasURI, 'Some message');

// You can export 'dbConnection' or use it elsewhere in your application.
module.exports = {
    dbConnection
};
