const express = require("express");

const app = express();

app.use("/api/users", require("./src/routes/users"));
app.use("/api/auth", require("./src/routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
