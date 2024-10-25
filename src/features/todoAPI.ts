import axios from "axios";

export const getTodoList = () => {
  axios
    .get("http://localhost:8080/todo")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("request erroe", err);
    });
};
