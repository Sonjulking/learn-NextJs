import {json} from "node:stream/consumers";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, {getMovie} from "../../../../components/movie-info";
import {Suspense} from "react";
import Loading from "../../../(home)/loading";

interface IParams {
    params: { id: string };
}


export async function generateMetadata({params}: IParams) {
    const {id} = params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage({params}: IParams) {
    /*    const movie = await getMovie(id);
        const videos = await getVideos(id);*/
    //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    const {id} = params;
    const movie = await getMovie(id);
    return (
            <div>
                <Suspense fallback={<h1>Loading Movie Info</h1>}>
                    <MovieInfo id={id}/>
                </Suspense>
                <Suspense fallback={<Loading/>}>
                    <MovieVideos id={id}/>
                </Suspense>
            </div>
    );
}
