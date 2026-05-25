const isAuth = (req, res, next) => {
  console.log("isAuth hit!");

  if (!req.session.isLoggedIn) {
    return res.status(404).json("page not found");
  }

  next();
};

module.exports = isAuth;
