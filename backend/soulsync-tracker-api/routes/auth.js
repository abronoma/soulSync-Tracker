import { Router } from "express";
// import { uploadProfile } from "../middlewares/upload.js";

// import { getAuthenticatedUser, loginUser, registerUser, updateUser } from "../controllers/userAdsWebApp.js";
import { registerUser, loginUser,updateUser } from "../controllers/auth.js";

// import { isAuthenticated, isAuthorized } from "../middlewares/userAuth.js";

const userRouter = Router()

//register user
userRouter.post('/user/register', registerUser);
// uploadLogo.single("uploadLogo")

//login user
userRouter.post('/user/login', loginUser);

//update user
// userRouter.put('/user/:id', 
//     isAuthenticated,
//     isAuthorized(['vendor', 'admin']),
//     updateUser);


//  userRouter.get('/user/me', isAuthenticated, getAuthenticatedUser )

export default userRouter;