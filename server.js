const express = require("express");
const app = express();
const port = 3000;

// // List of Users
// let users = [
//     {
//         name: "User 1",
//         age: 30
//     },
//     {
//         name: "User 2",
//         age: 45
//     },
//     {
//         name: "User 3",
//         age: 27
//     },
//     {
//         name: "User 4",
//         age: 22
//     }
// ]

// // List of Fruits
// let fruits = [
//     {
//         name: "Apple",
//         color: "Red"
//     },
//     {
//         name: "Banana",
//         color: "Yellow"
//     },
//     {
//         name: "Kiwi",
//         color: "Green"
//     },
//     {
//         name: "Grape",
//         color: "Purple"
//     },
// ]

// Express Routes

const fruitRouter = require("./routes/fruits");

const userRouter = require("./routes/users");

app.use("/fruits", fruitRouter);

app.use("/users", userRouter);

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/fruits`);
});
