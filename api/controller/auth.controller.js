import User from "../model/user.model.js"
;    
export const signup = async(req,res,next) => {
    try {
        const {username, email, password} = req.body;
        const user = await User.create({username, email, password});
        
        res.status(201).json(user);
    } catch (error) {
        next(error)
    }
}