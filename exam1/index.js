const express =require('express');
const bodyParser =require('body-parser');


const app = express();
const PORT = 3002;

app.use(bodyParser.json());

 const statusRoutes=require('./route/second.route')
 app.use("/status", statusRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
