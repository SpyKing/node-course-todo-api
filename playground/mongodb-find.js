const {MongoClient, ObjectID} = require('mongodb'); // ES6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err);
    }
    console.log('Connected to mongodb server');    

    // db.collection('Todos').find({_id: new ObjectID('5888d4037907e82348fa88ca')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Couldn\'t find todos', err);
    // });

     db.collection('Todos').find().count().then((count) => {
         console.log(`Todos count: ${count}`);
     }, (err) => {
         console.log(err);
     });

    db.close(); 
});
