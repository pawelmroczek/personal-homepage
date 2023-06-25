import axios from "axios";

export const getProjects = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  return response.data;
};
