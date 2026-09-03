export const postfollowRequestFromServer = async (receiverId) => {
  const response = await fetch("http://localhost:3006/api/user/myNetwork", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(receiverId),
  });

  const result = await response.json();
  return result;
};

export const getConnectionDataFromServer = async () => {
  const response = await fetch(
    "http://localhost:3006/api/user/myNetwork/connections",
    {
      method: "GET",
      credentials: "include",
    },
  );

  return await response.json();
};

export const patchIsAcceptedFromServer = async (id) => {
  const response = await fetch(
    `http://localhost:3006/api/user/myNetwork/${id}/accepted`,
    {
      method: "PATCH",
      credentials: "include",
    },
  );

  return await response.json();
};

export const patchIsRejectedFromServer = async (id) => {
  const response = await fetch(
    `http://localhost:3006/api/user/myNetwork/${id}/rejected`,
    {
      method: "PATCH",
      credentials: "include",
    },
  );
};
