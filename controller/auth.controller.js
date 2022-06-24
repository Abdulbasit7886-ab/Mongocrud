const jwtoken = require("jsonwebtoken");

exports.verify = async (req, res) => {
  try {
    const token = await jwtoken.sign(


      {
        _id: `${req.password}`,
        auth: `${req.auth}`,
        email: `${req.email}`,
      },
      "authentication-token"
    );
    console.log("controller",req.password);
    console.log("controller",req.email);
    console.log("controller",req.password);
    console.log(token);
    return res.status(200).send({
      message: "Welcome  Admin ",
      token,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      meesage: "Sory !!!!",
    });
  }
};



// {
//   _id: `${req.pass}`,
//   auth: `${req.auth}`,
//   email: `${req.email}`,
// },
// "authentication-token"
// );











// const jwtoken = require("jsonwebtoken");
// // const jwt_decode = require('jwt-decode');

// const login = async (req, res) => {
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

//   try {
//     console.log(pass);
//     if (
//       admin.email === req.body.email &&
//       admin.password === req.body.pass &&
//       admin.auth === req.body.auth
//     ) {
//       const token = await jwtoken.sign({
//         _id: `${admin.pass}`,
//         auth: `${admin.auth}`,
//         email: `${admin.email}`,
//       },'authentication-token');
//       console.log(token);
//       return res.status(200).send({
//         message: "Welcome  Admin ",
//         token
//       });
//     } else if (
//       student.email === req.body.email &&
//       student.password === req.body.pass &&
//       student.auth === req.body.auth
//     ) {
//       const token = await jwtoken.sign({
//         _id: `${student.pass}`,
//         auth: `${student.auth}`,
//         email: `${student.email}`,
//       },'authentication-token');
//       console.log(token);
//       return res.status(200).send({
//         message: "Welcome  Student ",
//         email,
//         auth,
//       });
//       // return res.status(200).json({
//       //     message: 'Hello ',token
//       // })
//     }
//   } catch (e) {
//     console.log(e.message);
//     return res.status(500).json({
//       meesage: "Sory !!!!",
//     });
//   }
// };
// const verify=async(req,res)=>{

//   var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ1bmRlZmluZWQiLCJhdXRoIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY1NTM1NzUxOH0.eF14Y2A3QTXW6h5Y_bdAHV7k3s4RMzogIHJvyS_WNLo";
//   var decoded = jwt_decode(token);
//   try {

//   console.log(decoded);
//   }
//   catch (e) {
//       res.status(500).send(decoded);
//   }
//   }

// const sum = async (req, res)=>{
//   let name = req.name;
//   return res.status(200).json({
//     user:'Hello '+name,
//     message: 'ok'
//   })
// }
// module.exports = {
//   login
// };

//   const authdecode=async (req, res) => {
//     console.log(req.data)
//   }
