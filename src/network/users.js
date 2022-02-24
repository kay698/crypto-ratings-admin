import instance from "./axios";

const getAllUsers = async function (query) {
  const data = await instance.get("/users?" + query);

  return data;
};

const searchUsers = async function (query) {
  const { data } = await instance.get(`/customers/search?query=${query}`);

  return data;
};
const deleteUser = async function (payload) {
  const { data } = await instance.delete(`/users/delete`, {
    data: payload,
  });
  return data;
};
const updateUser = async function (payload) {
  const { data } = await instance.put(`/users/update`, payload);
  return data;
};

export { getAllUsers, searchUsers, deleteUser, updateUser };
