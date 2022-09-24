

let statuses = [

    {
        firstname:"Mushfiqur",
        lastname:"Galib",
        status:"hello"
    }
];

exports.getStatus = (req, res) => {
    console.log(`Status in the database: ${statuses}`);

    res.send(statuses);
}

exports.createStatus = (req, res) => {   
    const status = req.body;
    statuses.push(status);
    console.log(`Status [${status.status}] added to the database.`);
};

