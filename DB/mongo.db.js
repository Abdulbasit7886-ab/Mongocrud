// const mongoose = require("mongoose");
// var mongoDB =
//   "mongodb+srv://abdulbasit7886:basit9t9@nodejscluster.89c9tjk.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// const Product = mongoose.model("token", productSchema);
// var db = mongoose.connection;
// const productSchema = mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//     },
//     pass: {
//         type: String,
//         required: true,
//     },
// 	auth: {
//         type: String,
//         required: true,
//     }
// })
// db.on("error", () => {
//     console.log("Db is Not Connected");
//   });
//   db.on("open", () => {
//     console.log("Db is  Connected");
//   });

// exports.module = {
//     productSchema
// }


// const mongoose = require("mongoose");

// var mongoDB = `mongodb://localhost:27017/NodejsDB`
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// var db = mongoose.connection;
// const productSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   pass: {
//     type: String,
//     required: true,
//   },
// });

// const Product = mongoose.model("token", productSchema);
// // db.on("error", () => {
// //     console.log("Db is Not Connected");
// //   });
// //   db.on("open", () => {
// //     console.log("Db is  Connected");
// //   });
  
// exports.module = Product ;


