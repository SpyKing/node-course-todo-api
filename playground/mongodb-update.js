const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('588e0e69de784417045d69d7')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('588e107bc45c980298fb3d78')
    }, {
        $set: {
            name: 'Spy King', location: 'Hyderabad'
        },
        $inc: {
            age: 11
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    db.close();
});