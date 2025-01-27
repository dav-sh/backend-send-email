const dotenv = require("dotenv");
// Enviroment variables
dotenv.config();

const express = require("express");
const cors = require("cors");
const EmailRoute = require("./routes/EmailRoute");
const corsOptions = require("./config/corsConfig");

const app = express();
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/email", EmailRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
