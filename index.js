const express = require("express");
const location = require("./routes/api/location");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use("/api/location", location);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`))
