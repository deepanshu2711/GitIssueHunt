import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetIssues = (page: number, lang: string) => {
  return useQuery({
    queryKey: ["issues", page, lang],
    queryFn: async () => {
      const res = await axios.get(`/api/issues?page=${page}&lang=${lang}`)
      console.log("useGetIssues", res.data)
      return res.data.data
    },
    staleTime: 5 * 60 * 1000,
  })
}
