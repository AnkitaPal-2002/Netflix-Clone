import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const protectRoute = (isAdminRequired = false) => {
    return (req, res, next) => {

        try {
            const token = req.cookies['jwt-netflix'];
            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "Not authorized to access this route"
                })
            }

            // Verify the token
            const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

            // Attach user info to request object
            req.user = {
                _id: decoded.userId,
                isAdmin: decoded.isAdmin
            }

            if (isAdminRequired && !req.user.isAdmin) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden, only admins can access this route"
                })
            }

            next();
        } catch (e) {
            console.error(e);
            return res.status(401).json({
                success: false,
                message: "Not authorized to access this route"
            })

        }




    }
}