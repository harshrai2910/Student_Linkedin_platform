export const postSearchFromServer = async (data) => {
  const response = await fetch("http://localhost:3005/api/user/search", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const getSearchResultFromServer = async (userId) => {
  const response = await fetch(
    `http://localhost:3005/api/user/search/${userId}`,
    {
      credentials: "include",
    },
  );

  return await response.json();
};
