import {asyncHamdler} from "../utils/asyncHandler.js"


const registerUser = asyncHamdler(async (req,res) => {
    res.status(200).json({
        message: "Ok"
    })
})

export {registerUser}