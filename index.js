const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "Website")));

app.listen(PORT, () => {
    console.log(`RetroK9 server running on port ${PORT}`);
});