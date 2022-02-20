import instance from "./axios";

async function logInUser(payload) {
  const { data } = await instance.post("/auth/login", payload);

  return data;
}

export { logInUser };
