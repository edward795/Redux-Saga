import axios from "axios";

export const fetchUsersApi = async () => {
  let data;
  console.log("called!");
  await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    data = res.data;
  });

  console.log(data);
  return data;
};
