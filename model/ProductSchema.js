const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    jobTitleName: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    preferredFullName: {
      type: String,
      require: true,
    },
    employeeCode: {
      type: String,
      require: true,
    },
    region: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    emailAddress: {
      type: String,
      require: true,
    },
  },
  {
    timeStamps: true,
  }
);

const empDetails = mongoose.model("empDetails", ProductSchema);
module.exports = empDetails;
