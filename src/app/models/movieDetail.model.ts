import { Comments } from './comments.model';
import { SpokenLanguages } from './spokenLanguages.model';
import { ProductionCountries } from './productionCountries.model';
import { ProductionCompanies } from './productionCompanies.model';
import { BelongsToCollection } from "./belongsToCollection.model"
import { KindIds } from "./kindIds.model"

export class MovieDetail {
  adult!: boolean
  backdrop_path!: string
  belongs_to_collection!: BelongsToCollection
  budget!: number
  genre!: KindIds[]
  homepage!: string
  id!: number
  imdb_id!: string
  original_language!: string
  original_title!: string
  overview!: string
  popularity!: number
  poster_path!: string
  production_companies!: ProductionCompanies[]
  production_countries!:ProductionCountries[]
  release_date!: Date
  revenue!: number
  runtime!: number
  spoken_languages!: SpokenLanguages[]
  status!: string
  tagline!: string
  title!: string
  video!: boolean
  vote_average!: number
  vote_count!: number
  comments!: Comments
}