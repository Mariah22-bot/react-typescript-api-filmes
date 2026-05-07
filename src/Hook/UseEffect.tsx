import { useState, useEffect } from 'react';
import type { Film } from '../Types/TypeFilm';

export const useGetFilms = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://ghibliapi.vercel.app/films')
            .then(response => {
                if (!response.ok) throw new Error('Erro ao carregar filmes');
                return response.json();
            })
            .then((data: Film[]) => {
                // 1. Ordena por título (A-Z)
                // 2. Pega apenas os 10 primeiros (.slice)
                const sortedFilms = data
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .slice(0, 10);
                
                setFilms(sortedFilms);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { films, loading, error };
};