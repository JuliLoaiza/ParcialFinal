const mongoose = require("mongoose");

const Info = new mongoose.Schema(
  {
    ID: Number,
    Latitud: String,
    Longitud: String,
    Room: Number,
  },
  {
    collection: "InfoUser",
  }
);

mongoose.model("InfoUser", Info);