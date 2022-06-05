import {IMovie} from "./i-movie";

export interface IServerResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
