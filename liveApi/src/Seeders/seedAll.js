const mongoose = require("mongoose");
const Product = require("../models/products.model");
const User = require("../models/users.model");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@defaultcluster.bzvjf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected, and seeding DB");
  })
  .catch((err) => console.log(err));

const seedProudcts = [
  {
    productName: "Soy Milk",
    productPrice: "10",
    productCategory: "non-dairy",
  },
  {
    productName: "Apple",
    productPrice: "5",
    productCategory: "fruit",
  },
  {
    productName: "Oats Meal",
    productPrice: "4",
    productCategory: "grain",
  },
  {
    productName: "Apple Juice",
    productPrice: "13",
    productCategory: "Juice",
  },
];

const seedUsers = [
  {
    email: "abc@gmail.com",
  },
  {
    email: "abcde@gmail.com",
  },
];

const seedAllDoc = async () => {
  await Product.deleteMany({});
  await Product.insertMany(seedProudcts);

  await User.deleteMany({});
  await User.insertMany(seedUsers);
};

seedAllDoc()
  .then(() => {
    mongoose.connection.close();
  })
  .then(() => console.log("finished seeding database!!!"));
