import axios from "axios";

export const fetchPostsApi = async (id) => {
  let postData;
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      postData = response.data;
    });
  return postData;
};
