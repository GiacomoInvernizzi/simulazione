import axios from "axios";

async function getMovies() {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?s=indiana+jones&apikey=c24db976"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

export default getMovies;
