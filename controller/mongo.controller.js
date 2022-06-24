const mongoose = require("mongoose");
var mongoDB = `mongodb://localhost:27017/NodejsDB`
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
});
const Product = mongoose.model("token", productSchema);
// const mongoose = require("mongoose");

// const Product = require("../DB/mongo.db");

exports.read = async (req, res) => {
  try {
    const product = await Product.find({});
    console.log(product);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(400).send("Error to find products : " + err.message);
  }
};
exports.create = async (req, res) => {
//   const data = await new data.findOne({email});
// if (!data) {
//     return req.status(401).json({message: 'Invalid API Key'});
// }
// else{
//     return req.status(200).json({message: 'email is correct'}
//     );
// const {email}=req.body;
  const product = new Product(req.body);
  // const data= Product.findOne({email})
  // if(!data){
  try {
    await product.save();
    return res.status(201).send("product added successfully");
  } catch (error) {
    return res
      .status(400)
      .send("Error in adding new product : " + error.message);
  }

};
exports.delete = async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findByIdAndDelete(_id);
    if (!product) {
      return res.status(400).send("Bad Request");
    } else {
      return res.status(201).json({
        message: "delete product successfully",
      });
    }
  } catch (error) {
    return res.status(400).send("Error to find product : " + error.message);
  }
};
exports.put = async (req, res) => {
  const data = await Product.findOne({email: req.body.email})
  const product = await Product.findByIdAndUpdate(

    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      pass: req.body.pass,
    },
    { new: true }
  );
  if(data){
    return res.status(403).json({
      message: 'aleardy exists',
    });
  }
  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
};

db.on("error", () => {
  console.log("Db is Not Connected");
});
db.on("open", () => {
  console.log("Db is  Connected");
});
