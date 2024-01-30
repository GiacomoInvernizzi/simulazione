import axios from "axios";

export const getDetailMovies = async (id: string) => {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?i=" + id + "&apikey=c24db976"
    );
    return response.data;
  } catch (error) {
    console.error("Errore nella richiesta dei dettagli film:", error);
  }
};
