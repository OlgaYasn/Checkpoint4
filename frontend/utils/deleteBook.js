import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const DeleteBook = (id) => {
  return axios.delete(apiUrl + "book/deletebook/" + id);
};
