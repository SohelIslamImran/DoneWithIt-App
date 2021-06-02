import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.101:9000/api",
});

export default apiClient;
