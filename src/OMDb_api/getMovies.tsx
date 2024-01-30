import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?s=indiana+jones&apikey=c24db976"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
