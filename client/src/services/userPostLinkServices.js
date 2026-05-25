export const createPostFromServer = async (data) => {
  const formData = new FormData();
  formData.append("content", data.content);
  if (data.postImage && data.postImage[0]) {
    formData.append("postImage", data.postImage[0]);
  }

  const response = await fetch(
    "http://localhost:3005/api/user/profile/create-post",
    {
      method: "post",
      credentials: "include",
      body: formData,
    },
  );

  return await response.json();
};

export const getPostFromServer = async () => {
  const response = await fetch(
    "http://localhost:3005/api/user/profile/all-post",
    {
      credentials: "include",
    },
  );

  return await response.json();
};

export const deletePostFromServer = async (data) => {
  const response = await fetch(
    "http://localhost:3005/api/user/profile/post/delete",
    {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    },
  );

  return await response.json();
};

export const getAllPostsFromServer = async () => {
  const response = await fetch("http://localhost:3005/api/user/getallPost", {
    credentials: "include",
  });

  return await response.json();
};

export const putLikesFromServer = async (postId) => {
  const response = await fetch(
    `http://localhost:3005/api/user/post/${postId}`,
    {
      method: "put",
      credentials: "include",
    },
  );

  return await response.json();
};

export const putFollowersfromServer = async (userId) => {
  const response = await fetch(
    `http://localhost:3005/api/user/follwers/${userId}`,
    {
      method: "put",
      credentials: "include",
    },
  );

  return await response.json();
};
