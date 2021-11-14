export interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface SideBarProps {
  genres: Array<GenreResponseProps>,
  selectedGenreId: number,
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>

}

export interface ContentProps {
  selectedGenre: GenreResponseProps,
  movies: Array<MovieProps>
}
