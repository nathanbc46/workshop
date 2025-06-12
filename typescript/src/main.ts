import { users, addUser, getUserById } from './users'

addUser({ name: 'Nathan', email: 'nathanbc46@gmail.com' })
addUser({ name: 'Jim', email: 'Jim@aa.com' })
console.log(users);
console.log(getUserById(1)); // Output: { id: 1, name: 'Nathan', email: '