export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown'
export type Status = 'Alive' | 'Dead' | 'unknown'

export interface Origin {
  name: string
  link: string
}

export interface Location {
  name: string
  link: string
}

export interface Character {
  id: number
  name: string
  status: Status
  species: string
  type: string
  gender: Gender
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: URL
  created: Date
}

export interface Pagination {
  count: number
  next: string | null
  pages: number
  prev: string | null
}

export interface Filters {
  name?: string
  status?: Status
  species?: string
  type?: string
  gender?: Gender
}

