import { withRedisCache } from "@/lib/withRedisCache";
import { gitHubServices } from "./gitHubServices";

export const issueService = {
  getAll: async (query: string, page: string) => {
    const cacheKey = `issues:${query}:page:${page}`;
    return withRedisCache(
      cacheKey,
      () => gitHubServices.fetchGithubIssues(query, page),
      { ttlSeconds: 6000 },
    );
  },
};
