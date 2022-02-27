import instance from "./axios";

export const addCrypto = async function (payload) {
  const { data } = await instance.post(`/crypto/create`, payload);
  return data;
};

export const updateCrypto = async function (payload) {
  const { data } = await instance.put(`/crypto/update`, payload);
  return data;
};

export const getAllCrypto = async function (payload) {
  const data = await instance.get(`/crypto?${payload}`);
  return data;
};

export const getSingleCrypto = async function (cryptoId) {
  const { data } = await instance.get(`/crypto/${cryptoId}`);
  return data;
};

export const deleteCrypto = async function (payload) {
  const { data } = await instance.delete(`/crypto/delete`, {
    data: payload,
  });
  return data;
};

export const uploadFile = async function (file) {
  const data = await instance.post(`/media/create`, file);
  return data;
};
