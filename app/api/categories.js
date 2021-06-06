import client from "./client";

const get = () => client.get("/categories");

export default { get };
