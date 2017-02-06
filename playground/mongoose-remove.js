const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findByIdAndRemove('58989e77c54a0911a8f5ef19').then((todo) => {
//     console.log(JSON.stringify(todo, undefined, 2));
// });

// Todo.findOneAndRemove({id: '58989e77c54a0911a8f5ef19'}).then((todo) => {
//     console.log(JSON.stringify(todo, undefined, 2));
// });
