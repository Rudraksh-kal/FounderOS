import User from "../models/Users.js";

const syncUser = async (
  req,
  res,
  next
) => {
  try {
    let user = await User.findOne({
      firebaseUid: req.user.uid,
    });

    if (!user) {
      user = await User.create({
        firebaseUid: req.user.uid,
        name:
          req.user.name ||
          req.user.email?.split("@")[0] ||
          "User",
        email: req.user.email,
        photoURL:
          req.user.picture || "",
      });
    }

    req.dbUser = user;

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default syncUser;