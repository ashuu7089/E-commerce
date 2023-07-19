
import user from '../models/userSchema.js'


export const userSignUP = async (req, res) => {
    const { email, password } = req.body;
    const userData = new user(req.body);
    try {
        const isUserExists = await user.findOne({ email: email });
        if (isUserExists) {
            return res.status(409).json({
                status: false,
                error: "User with this email is already exists",
            });
        }
        await userData.save();
        return res.status(201).json({
            success: true,
            message: "Registration successfully",
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const userLogin = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const isUserLogin = await user.findOne({ userName: userName, password: password })
        if (isUserLogin) {
            return res.status(200).json({
                success: true,
                message: isUserLogin
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "Invalid login"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}