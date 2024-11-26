const Userschema = require('../schema/signup');

const signup = async (req, res) => {
    try {
        const { firstname, lastname, username, password, address, contact } = req.body;

        const mydata = {
            name: firstname + ' ' + lastname,
            username: username,
            password: password,
            address: address,
            contact: contact
        };

        const checkuser = await Userschema.findOne({ username: mydata.username });

        if (checkuser == null) {
            const newuser = new Userschema(mydata);
            const saveduser = await newuser.save();
            console.log(saveduser);

            res.send({
                success: true
            });
        } else {
            res.send({
                success: false,
                msg: 'duplicate user'
            });
            console.log('duplicate');
        }
    } catch (error) {
        console.log('error: ' + error);
        res.status(500).send({
            success: false,
            msg: 'Internal Server Error'
        });
    }
};

module.exports = signup;
