import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await githubApi.get(`/search/users?${params}`);
  console.log(response);
  return response.data.items;
};

export const getUser = async (login) => {
  const response = await githubApi.get(`/users/${login}`);
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    return response.data;
  }
};

export const getRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await githubApi.get(`/users/${login}/repos?${params}`);
  return response.data;
};
