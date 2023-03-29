const express = require("express");
const mongoose = require("mongoose");
const { findByIdAndDelete } = require("./model/ProductSchema.js");
const empDetails = require("./model/ProductSchema.js");

const app = express();
app.use(express.json());

// connecting database
mongoose.connect(
  "mongodb+srv://krishnsundaram:Hjed1Sm91XJ1sBXJ@api.kyrwzjl.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("error occurred");
});

db.on("open", () => {
  console.log("connected successfully");
});

app.get("/api/employees", async (req, res) => {
  try {
    const emp = await empDetails.find({});
    res.status(200).json(emp);
  } catch (error) {
    res.status(404).send("Error is : ", error);
  }
});

app.post("/api/createEmployee", async (req, res) => {
  try {
    const emp = await empDetails.create(req.body);
    res.status(200).json(emp);
  } catch (error) {
    res.status(404).send("Error is ", error);
  }
});

app.get("/api/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const individualEmp = await empDetails.findById(id);
    res.status(200).json(individualEmp);
  } catch (error) {
    res.status(404).send("Error is ", error);
  }
});

app.put("/api/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatingIndividualEmp = await empDetails.findByIdAndUpdate(
      id,
      req.body
    );

    if (!updatingIndividualEmp) {
      return res.status(404).send("Cannot update the employee details");
    }

    res.status(200).json(updatingIndividualEmp);
  } catch (error) {
    res.status(404).send("Error is ", error);
  }
});

app.delete("/api/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const emp = await empDetails.findByIdAndDelete(id);
    if (emp == null) {
      return res.status(200).send("user deleted successfully");
    }

    res.status(404).send("Cannot delete the user");
  } catch (error) {
    res.send(404).send("Error is ", error);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
