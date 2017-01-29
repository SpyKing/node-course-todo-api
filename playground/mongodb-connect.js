// const MongoClient = require('mongodb).MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // ES6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err);
    }
    console.log('Connected to mongodb server');    

    // db.collection('Todos').insertOne({
    //     text: 'My first todo',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to add todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });
    
    // db.collection('User').insertOne({
    //     name: 'Spy King',
    //     age: 14,
    //     location: 'Hyderabad'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to add user', err);            
    //     }

    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    db.close(); 
});
