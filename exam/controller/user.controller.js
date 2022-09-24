const axios=require('axios')

let users = [

    {
        firstname:"Mushfiqur",
        lastname:"Galib",
        age:'12'
    },
    {
        firstname:"Mushfiqur",
        lastname:"Rahman",
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

const servURL = "http://exam1:3002/status";

exports.firstServiceToSecond = async (req, res) => {
	let responseFromDifferentService = await axios
		.get(servURL)
		.catch((error) => {
			console.log("error: ", error);
		});
	
        console.log("dhukse");
	res.json(responseFromDifferentService.data);
};
