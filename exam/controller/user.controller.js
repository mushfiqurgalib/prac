

let users = [

    {
        firstname:"Mushfiqur",
        lastname:"Galib",
        age:'12'
    }
];

exports.getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

exports.createUser = (req, res) => {   
    const user = req.body;
    users.push(user);
    
    console.log(`User [${user.username}] added to the database.`);
};

