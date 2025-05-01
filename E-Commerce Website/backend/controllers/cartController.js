import userModel from "../models/userModel.js"


// add product to user cart
// const addToCart = async (req, res) => {

//     try {
//         const { userId, itemId, size } = req.body
        
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1
//             } else {
//                 cartData[itemId][size] = 1
//             }
//         }else{
//             cartData[itemId] = {}
//             cartData[itemId][size] = 1
//         }

//         await userModel.findByIdAndUpdate(userId, {cartData})

//         res.json({ success:true, message: "Added To Cart" })

//     } catch (error) {
//         console.log(error);
//         res.json({success: false, message: error.message })
//     }

// }

// Add product to user cart
const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;
        const userId = req.body.userId; // Injected from auth middleware

        if (!userId || !itemId || !size) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const cartData = userData.cartData || {};

        if (cartData[itemId]) {
            cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        return res.json({ success: true, message: "Added to cart" });

    } catch (error) {
        console.error("Add to cart error:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};


// Update user cart

const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {}; // ensure it's at least an empty object

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, { $set: { cartData } }); // 💡 key change

        res.json({ success: true, message: "Cart Updated" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};




// get user cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success: true, cartData})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message })
    }
}

export { addToCart , updateCart , getUserCart }