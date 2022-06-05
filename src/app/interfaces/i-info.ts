import {IGenre} from "./i-genre";
import {IVideo} from "./i-video";
import {IImage} from "./i-image";

export interface IInfo {
  id: number;
  adult: boolean;
  backdrop_path: string;
  budget: number;
  revenue: number;
  genres: IGenre[];
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  videos: IVideo;
  images: IImage;
}
