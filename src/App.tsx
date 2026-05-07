import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FilmList } from './useState';
import { FilmDetails } from './Details';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/react-typescript-api-filmes">
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="/films/:id" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;