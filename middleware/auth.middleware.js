const jwt_decode = require('jwt-decode');
// const Product= require("../DB/mongo.db")

// const check=require('./mongo.middleware');

exports.login = async function (req, res,next) {
    const { email, pass, auth } = req.body;
    // console.log('request body auth',auth);
    // console.log('middleware',req.body);  
    // const data = await Product.find({email})
    // console.log('data in login',data);

    const admin = {
      email: "admin@admin.com",
      password: "12345",
      auth: "admin",
    };
    const student = {
      email: "student@student.com",
      password: "123456",
      auth: "student",
    };
  
        console.log(pass);
      if (
        admin.email == email &&
        admin.password == pass &&
        admin.auth == auth
      ||
      student.email == email &&
      student.password == pass &&
      student.auth == auth) {
        req.email = email;
        req.password = pass;
        req.auth = auth;
        // console.log('data in middleware',data);
        next();

        }
        else{
            return res.status(500).json({
                message:"not authorized to login with",

        })
        }
        // next();


    }

let decoded_data='';
exports.authorize=(req,res,next)=>{
    console.log('middleware called....')
   console.log(req.header('authorization'));
    var token = req.header('authorization')
    console.log(token);
    decoded = jwt_decode(token);
      console.log('decode data',decoded.auth);
      // req.role = decoded.auth;
    return   res.status(200).json({
      decoded
    });
// if (decoded.auth ==="admin"){
//       return res.status(200).json({
//       decoded
//     });

//       next();
//   }
//   else{
//       return res.status(401).send({message:"not allowed to login"});
//   }

  }

  exports.check = (req,res,next)=>{
    console.log('decdoed in check',decoded.auth)
    if (decoded.auth ==="admin"){
        next();
    // return res.status(401).send({message:"  not allowed to login"});
    }
    else{
        return res.status(401).send({message:"not allowed to login"});
        // next();
    }
    }
    
    
    // res.send('middleware request....');
    // next();

 


// exports.decode=function (req, res, next) {
//      req.token = req.body;
//     next();
// }

// module.exports = login;
// module.exports = decode;









// const jwt_decode = require('jwt-decode');

// const verify=async(req,res)=>{


//     var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ1bmRlZmluZWQiLCJhdXRoIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY1NTM1NzUxOH0.eF14Y2A3QTXW6h5Y_bdAHV7k3s4RMzogIHJvyS_WNLo";
//     var decoded = jwt_decode(token);
//     try {
    
     
//     console.log(decoded);
//     }
//     catch (e) { 
//         res.status(500).send(decoded);
//     }
//     }
//     module.exports = verify;

// const checkNumber = function (req, res, next){
//     if(req.body.number > 10){
//         req.name = 'Abdul Basit';
//         next();
//     }
//     return res.status(400).json({
//         message: 'Your entered number ' +req.body.number+ 'Should be greater than 10'
//     })
// }
// module.exports = checkNumber;












// // const jwt_decode = require('jwt-decode');

// // const middleware=(req,res,next)=>{
// //     console.log('middleware called....')
// //     var token = req.header['Authorization'];
// //       var decoded = jwt_decode(token);
// //       console.log(decoded);
// //       req.data = decoded;

// //     // res.send('middleware request....');
// //     next();

 

// //   }

// //   module.exports = middleware;
// exports.login = async function (req, res,next) {
//   const { email, pass, auth } = req.body;
//   console.log(req.body);  
//   const admin = {
//     email: "admin@admin.com",
//     password: "12345",
//     auth: "admin",
//   };
//   const student = {
//     email: "student@student.com",
//     password: "123456",
//     auth: "student",
//   };

//       console.log(pass);
//     if (
//       admin.email == req.body.email &&
//       admin.password == req.body.pass &&
//       admin.auth == req.body.auth
//     ||
//     student.email == req.body.email &&
//     student.password == req.body.pass &&
//     student.auth == req.body.auth) {
//       req.name = req.body.name;
//       req.password = req.body.pass;
//       req.auth = req.body.auth;
//       }
//       else{
//           return res.status(500).json({
//               message:"not authorized to login with",

//       })
//       }
//       next();


//   }