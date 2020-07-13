var express = require("express");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Start server and listen to port
app.listen(port, () => {
    console.log(`Server is connected to port  + ${port}`)
});

//Create GET route
app.get('/express_backend', (req, res) => {
    res.send({express: "Your express backend is connected to react"});
})