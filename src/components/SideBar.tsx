import { useMovies } from '../contexts/MovieContext';
import '../styles/sidebar.scss';
import { Button } from './Button';

export function SideBar() {
  // Complete aqui
  const {genres, handleClickButton, selectedGenreId} = useMovies();

  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
      <Button
        id={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
      ))}
    </div>
  </nav>
  );
}
