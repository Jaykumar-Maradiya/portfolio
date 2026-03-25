import axios from "axios";

export const sendContact = (data) => {
  return axios.post("https://your-backend-url/api/contact", data);
};
