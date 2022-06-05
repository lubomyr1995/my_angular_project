import {environment} from "../../environments/environment";

let {API: baseURL} = environment;

const urls = {
  movies: `${baseURL}/discover/movie`,
  genres: `${baseURL}/genre/movie/list`,
  movie: `${baseURL}/movie`
};

export {baseURL, urls};
