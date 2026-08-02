const express = require("express");
const networkRouter = express.Router();
const networkController = require("../controller/networkController");

networkRouter.post("/myNetwork", networkController.postRequestTofollow);
networkRouter.get(
  "/myNetwork/connections",
  networkController.getConnectionData,
);

networkRouter.patch(
  "/myNetwork/:id/accepted",
  networkController.patchAcceptedRequestData,
);

networkRouter.patch(
  "/myNetwork/:id/rejected",
  networkController.patchRejectedRequestData,
);

module.exports = networkRouter;
