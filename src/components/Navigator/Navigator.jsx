import { Link } from 'react-router-dom';

export const Navigator = () => {
  return (
    <nav>
      <ul>
        <Link to="home">Home</Link>
        <Link to="auth">Auth</Link>
        <Link to="gallery">Gallery</Link>
        <button>Log out</button>
      </ul>
    </nav>
  );
};
