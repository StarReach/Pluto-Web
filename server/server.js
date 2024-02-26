const express = require("express");
const cors = require("cors");

PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
