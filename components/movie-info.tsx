import {API_URL} from "../app/(home)/page";
import potato from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    console.log(`Fetching movies : ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    console.log(`하이하이 ${API_URL}`);
    return response.json();
}

export default async function MovieInfo({id}: { id: string }) {
    const movie = await getMovie(id);
    /*return <h6>{JSON.stringify(movie)}</h6>*/
    return (
            <div className={potato.container}>
                <img
                        src={movie.poster_path}
                        className={potato.poster}
                        alt={movie.title}
                />
                <div className={potato.info}>
                    <h1 className={potato.title}>{movie.title}</h1>
                    <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                    <p>{movie.overview}</p>
                    <a
                            href={movie.homepage}
                            target="_blank"
                    > Homepage&rarr; {movie.homepage}</a>
                    {/*target="_blank" 새창으로 이동*/}
                </div>

            </div>
    );
}