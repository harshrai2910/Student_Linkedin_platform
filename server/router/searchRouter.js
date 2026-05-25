const express = require("express");
const searchRouter = express.Router();
const searchController = require("../controller/searchController");
const isAuth = require("../middleware/isAuth");

searchRouter.post("/search", searchController.postSearch);
searchRouter.get("/search/:userId", searchController.getSearchResult);

module.exports = searchRouter;
