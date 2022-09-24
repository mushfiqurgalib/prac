const express =require('express');
const bodyParser =require('body-parser');

// import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const usersRoutes=require('./route/user.route')
app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
