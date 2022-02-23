import instance from "./axios";

const getAllUsers = async function (query) {
  const data = await instance.get("/customers?" + query);

  return data;
};
const getAllAgents = async function () {
  const { data } = await instance.get("/users/agents");

  return data;
};

const getUsersOnWhatsapp = async function (query) {
  const { data } = await instance.get("/users/on-whatsapp?" + query);

  return data;
};

const getUsersOnMessenger = async function (query) {
  const { data } = await instance.get("/users/on-messenger?" + query);

  return data;
};

const searchUsers = async function (query) {
  const { data } = await instance.get(`/customers/search?query=${query}`);

  return data;
};

export {
  getAllUsers,
  getAllAgents,
  getUsersOnWhatsapp,
  getUsersOnMessenger,
  searchUsers,
};
