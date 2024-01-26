import axios from "axios";

export const getDetailMovies = (id: string) => {
  axios
    .get("http://www.omdbapi.com/?i=" + id + "&apikey=c24db976")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
