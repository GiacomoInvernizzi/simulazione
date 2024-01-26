import axios from "axios";

export const getMovies = () => {
  axios
    .get("http://www.omdbapi.com/?s=indiana+jones&apikey=c24db976")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
