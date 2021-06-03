import client from "./client";

const login = (loginInfo) => client.post("/auth", loginInfo);

export default { login };
