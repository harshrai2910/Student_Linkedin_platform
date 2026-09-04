const API_URL = import.meta.env.API_URL;

export const postSearchFromServer = async (data) => {
  const response = await fetch(`${API_URL}/api/user/search`, {
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
  const response = await fetch(`${API_URL}/api/user/search/${userId}`, {
    credentials: "include",
  });

  return await response.json();
};
