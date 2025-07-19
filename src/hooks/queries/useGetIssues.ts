import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetIssues = (page: number, lang: string, label: string) => {
  return useQuery({
    queryKey: ["issues", page, lang, label],
    queryFn: async () => {
      const res = await axios.get(
        `/api/issues?page=${page}&lang=${lang}&label=${label}`,
      );
      console.log("useGetIssues", res.data);
      return res.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

