const {Favorite}= require("../dataBase/DB_connection");


const deleteFav= async (req, res) => {
    const {id}= req.params;
    try {
        const fav= await Favorite.findOne({where: {id}});

        await fav.removeUser(id);
        return res.status(200).json({success: true})

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

module.exports={
    deleteFav
}