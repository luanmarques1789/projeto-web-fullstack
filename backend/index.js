const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
