import instance from "./axios";

async function topUpWallet(payload) {
  const { data } = await instance.post("/whatsapp/wallet/top-up", payload);

  return data;
}

export { topUpWallet };
