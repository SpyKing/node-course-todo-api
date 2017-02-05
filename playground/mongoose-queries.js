const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '589710aabdd87e12bc73f24d11';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({_id: id}).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({_id:id}).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('No todo was found with that id');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// challenge
var user_id = '589494e616df3701a09f1b61';

if (!ObjectID.isValid(user_id)) {
    return console.log('Id not valid');
}

User.findById(user_id).then((user) => {
    if (!user) {
        return console.log('No user was found with that id');
    }

    console.log('User found');
    console.log(JSON.stringify(user, undefined, 2));
});
// challenge
