import api from "./api";

export const getUsers = async () => {
  const response = await api.get("/api/v1/users");

  if (response.status !== 200) {
    return []; // throw new Error('')
  }

  return response.data.users;
};

export const createUser = async (user) => {
  const response = await api.post("/api/v1/user", user);
  return response;
};

export const updateUser = async (userId, user) => {
    const response = await api.put(`/api/v1/user/${userId}`, user);
    return response;
}
export const deleteUser = async (userId) => {
    const response = await api.delete(`/api/v1/user/${userId}`);
    return response;
}
