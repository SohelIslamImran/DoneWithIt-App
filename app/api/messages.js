import client from "./client";

const endpoint = "/messages";

const get = () => client.get(endpoint);

const send = (message, listingId) =>
  client.post(endpoint, { message, listingId });

export default { send, get };
