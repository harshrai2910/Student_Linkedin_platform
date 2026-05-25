export const signupFromServer = async (data) => {
  const response = await fetch("http://localhost:3005/api/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};

export const loginFromServer = async (data) => {
  const response = await fetch("http://localhost:3005/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};

export const logoutFromServer = async () => {
  const response = await fetch("http://localhost:3005/api/user/postLogout", {
    method: "post",
    credentials: "include",
  });
  return await response.json();
};

export const authStatus = async () => {
  const response = await fetch("http://localhost:3005/api/user/status", {
    credentials: "include",
  });

  return await response.json();
};
