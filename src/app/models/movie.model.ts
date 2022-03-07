import { Gender } from './gender.model';
export class Movie {
  adult!: boolean
  genre_ids!: number[]
  id!: number
  original_language!: string
  original_title!: string
  overview!: string
  genres!: Gender[]
  popularity!: number
  release_date!: string
  title!: string
  video!: boolean
  vote_average!: number
  vote_count!: number
  poster_path!: string
  backdrop_path!: string
  stringGenres?: string
}