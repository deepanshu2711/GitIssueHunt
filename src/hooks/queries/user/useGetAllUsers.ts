import { User } from "@/generated/prisma";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`/api/user`);
      return res.data.data as User[];
    },
    staleTime: 5 * 60 * 1000,
  });
};
