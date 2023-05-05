const {User}= require("../dataBase/DB_connection");


const postUser = async (req, res)=> {
    const {email, password}= req.body;
    try {
        if(!email || !password) return res.status(400).json({message: "Faltan datos."});

        const [user, created]= await User.findOrCreate({
            where: {email, password}
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: error});
    }
};


module.exports={
    postUser,
};
