import axios from "axios";

export const userService = {
  getAll: async () => {
    const response = await axios.get(`/api/user`);
    return response.data;
  },
};
