import axios from "axios";

const getUsers = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    resolve(data);
  });
};

const getPosts = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + user_id
    );
    resolve(data);
  });
};

const getData = (user_id) => {
  Promise.all([getUsers(user_id), getPosts(user_id)])
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

export default getData;
