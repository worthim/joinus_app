const express =  require ("express");
var bodyParser = require("body-parser");
const path = require ('path');

const {runQuery, addEmail} = require('./app');

const app = express();


app.use(express.static(path.join(__dirname,"pub")))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.listen(3002,() => 
{console.log("listening on port 3002");
});


app.get("/data", async(req,res) => {
    const data = await runQuery();

    console.log(data);

    res.send({
        data: data[0].total
    });
});
app.post("/register", (req, res) => {
    addEmail(req.body.email);

    console.log(req.body);
    res.send("POST request to the homepage");
});