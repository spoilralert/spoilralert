import axios from "axios";

export function GetMovieDbRestUrl() {
  return `${
    process.env.NEXT_PUBLIC_MOVIEDB_REST_URL || "https://api.themoviedb.org/3"
  }`;
}

const instance = axios.create({
  baseURL: GetMovieDbRestUrl(),
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIEDB_TOKEN}`,
  },
});

const imageBaseUrl = "https://image.tmdb.org/t/p/w1280";

export async function GetMovieDetails(id) {
  try {
    const response = await instance.get("/movie/" + id);
    console.log(response);
    const data = response.data;
    console.log(data.title);
    const movieDetails = {
      title: data.title,
      plot: data.overview,
      release_date: data.release_date,
      poster_image: imageBaseUrl + data.poster_path,
      backdrop_image: imageBaseUrl + data.backdrop_path,
      genre1: data.genres[0] && data.genres[0].name,
      genre2: data.genres[1] && data.genres[1].name,
      genre3: data.genres[2] && data.genres[2].name,
    };
    console.log("MOVIEDETAILS!!!");
    console.log(movieDetails);
    return movieDetails;
  } catch (error) {
    console.log(error);
  }
}

export async function SearchMovie(title) {
  try {
    const response = await instance.get("search/movie?query=" + title);
    const data = response.data;
    return { data };
  } catch (error) {
    return { error };
  }
}
