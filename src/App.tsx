import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { useState } from 'react';
import { api } from './services/api';
import { useEffect } from 'react';
import { GenreResponseProps, MovieProps } from './@types/interfaces';



export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);


  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []),

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    
      <SideBar 
      genres={genres}
      selectedGenreId={selectedGenreId}
      setSelectedGenreId={setSelectedGenreId}
      ></SideBar>
      <Content 
      selectedGenre={selectedGenre}
      movies={movies}
      ></Content>      
    
    </div>
  )
}