// import jwt from 'jsonwebtoken'

// const authUser = async (req, res, next) => {
//     const { token } = req.headers;


//     if (!token) {
//         return res.json({ success: false, message: 'Not Authorized Login Again' })
//     }

//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()
//     } catch (error) {
//         console.log(error);
//         res.json({success: false, message: error.message})
        
//     }
// }

// export default authUser

import jwt from 'jsonwebtoken'
import UserModel from '../models/userModel.js' // Adjust path if needed

const authUser = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login again.' });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await UserModel.findById(token_decode.id);

        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found. Please login again.' });
        }

        req.body.userId = user._id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: 'Invalid or expired token.' });
    }
}

export default authUser;
