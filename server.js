const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./route");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect('mongodb://localhost:27017/webDB')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("Mongo Error:", err));

app.use('/', route);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
