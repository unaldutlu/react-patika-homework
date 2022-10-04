import axios from "axios";

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    resolve(data);
  });
};

const geTPosts = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    resolve();
  });
};


Promise.all
getData()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
