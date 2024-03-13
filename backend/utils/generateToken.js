import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    //takes info and embeds this information to the token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15d' })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms format
        httpOnly: true, //prevents XSS(cross-site scripting) attacks, this cookie is not available via javascript
        sameSite: "strict", //prevent CSRF(cross-site request forgery) attacks
        secure: process.env.NODE_ENV !== "development",
    });
}
export default generateTokenAndSetCookie;