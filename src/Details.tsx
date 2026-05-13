import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Film } from './Types/TypeFilm';

export const FilmDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [film, setFilm] = useState<Film | null>(null);

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/${id}`)
            .then(res => res.json())
            .then(data => setFilm(data)).catch(_err => alert('Erro ao carregar detalhes do filme.'));
    }, [id]);

    if (!film) return <p className="text-center">Carregando detalhes do filme...</p>;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
                {/* Banner de Topo */}
                <div className="relative h-80">
                    <img src={film.movie_banner} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Link to="/" className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/40 transition-all">
                            ← Voltar
                        </Link>
                        <h1 className="text-white text-4xl md:text-6xl font-black text-center px-4 drop-shadow-lg">
                            {film.title}
                        </h1>
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8 md:p-12">
                    <div className="flex flex-wrap gap-4 mb-8">
                        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">🎬 {film.director}</span>
                        <span className="bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-bold">⭐ {film.rt_score}% Rotten</span>
                        <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-bold">📅 {film.release_date}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Sinopse</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {film.description}
                    </p>

                    <div className="border-t pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-500">
                        <p><strong>Título Original:</strong> {film.original_title}</p>
                        <p><strong>Produtor:</strong> {film.producer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};