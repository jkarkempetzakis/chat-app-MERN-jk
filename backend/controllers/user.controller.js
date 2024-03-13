import User from "../models/user.model.js";

export const getUsersForBar = async (req, res) => {
    try {
        const loggedInId = req.user._id;
        const filteredresult = await User.find({ _id: { $ne: loggedInId } }); //adding the $ne hence the filter, looking for every user except the one logged in
        res.status(200).json(filteredresult);

    } catch (error) {
        console.log("Error in getUsersforBar:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}