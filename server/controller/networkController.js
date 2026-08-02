const UserConnection = require("../model/userConnections");

exports.postRequestTofollow = async (req, res, _) => {
  try {
    const { receiverId } = req.body;
    const senderId = req.session.user.userId;

    const userNetwork = new UserConnection({
      sender: senderId,
      receiver: receiverId,
    });

    await userNetwork.save();

    res.status(200).json({ status: "pending status" });
  } catch (exception) {
    console.log("error while following, error: ", exception);
    res.status(500).json({ status: "can't send invite" });
  }
};

exports.getConnectionData = async (req, res, next) => {
  try {
    const currentUserId = req.session.user.userId;

    const sentRequest = await UserConnection.find({
      sender: currentUserId,
      status: "pending",
    }).populate("receiver");

    const receivedRequest = await UserConnection.find({
      receiver: currentUserId,
      status: "pending",
    }).populate("sender");

    const totalConnection = await UserConnection.find({
      status: "accepted",
      $or: [{ sender: currentUserId }, { receiver: currentUserId }],
    }).populate("sender receiver");

    const Connections = totalConnection.map((data) => {
      const connectedUser =
        data.sender._id.toString() === currentUserId
          ? data.receiver
          : data.sender;

      return connectedUser;
    });

    return res
      .status(200)
      .json({ sentRequest, receivedRequest, totalConnection: Connections });
  } catch (error) {
    console.log("error while fetching Connection Data: ", error);
    return res.status(500).json({ msg: "error from server" });
  }
};

exports.patchAcceptedRequestData = async (req, res, _) => {
  try {
    const { id } = req.params;
    await UserConnection.findByIdAndUpdate(id, {
      status: "accepted",
    });
    return res.status(200).json({ status: "Accepted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Error" });
  }
};

exports.patchRejectedRequestData = async (req, res, _) => {
  try {
    await UserConnection.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: "Rejected" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: "Error" });
  }
};
