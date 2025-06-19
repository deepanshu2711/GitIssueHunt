import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetIssues = (page: number) => {
  return useQuery({
    queryKey: ["issues", page],
    queryFn: async () => {
      const res = await axios.get(`/api/issues?page=${page}`)
      console.log("useGetIssues", res.data)
      return res.data.data
    },
    staleTime: 5 * 60 * 1000,
  })
}
