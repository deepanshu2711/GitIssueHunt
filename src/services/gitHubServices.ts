import axios from "axios";

export const gitHubServices = {
  fetchGithubIssues: async (query: string, page: string) => {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=${query}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      },
    );
    return response.data;
  },
};
