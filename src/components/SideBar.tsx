import { Button } from './Button';
import { SideBarProps } from '../@types/interfaces';
 

import '../styles/global.scss';
import '../styles/sidebar.scss'

export function SideBar(props: SideBarProps) {
  // Complete aqui
  const {
    genres, selectedGenreId, setSelectedGenreId
  } = props
  
    function handleClickButton(id: number) {
      setSelectedGenreId(id);
    }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            /> 
          ))}
        </div>
    </nav>
  )
}