import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FilmList } from './FilmList';
import { FilmDetails } from './Details';
import.meta.env;

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="/films/:id" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;