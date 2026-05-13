import { Link } from "react-router-dom";
import { useGetFilms } from "./Hook/UseEffect";

export const FilmList = () => {
    const { films } = useGetFilms();

    return (

        <div className="min-h-screen p-4 md:p-10 flex flex-col items-center">
            {/* 1. Header Centralizado */}
            <header className="mb-12 text-center max-w-2xl">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500 mb-2">
                    Studio Ghibli
                </h1>
                <p className="text-slate-500 font-medium">
                    Os 10 clássicos mais icônicos em ordem alfabética
                </p>
            </header>

            {/* 2. Container Centralizado para os Cards */}
            <div className="w-full max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {films.map((film, index) => (
                        <Link
                            to={`/films/${film.id}`}
                            key={film.id}
                            className="animate-fade-in flex bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-slate-100 h-44"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Imagem menor alinhada à esquerda */}
                            <div className="w-1/3 min-w-35 card-zoom">
                                <img
                                    src={film.image}
                                    alt={film.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Informações alinhadas à DIREITA dentro do container */}
                            <div className="w-2/3 p-3 flex flex-col justify-between items-end text-right">
                                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    Ver detalhes →
                                </span>

                                <div>
                                    <h2 className="font-bold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                        {film.title}
                                    </h2>
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                                        {film.release_date}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};