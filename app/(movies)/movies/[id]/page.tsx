import {API_URL} from "../../../(home)/page";
import {json} from "node:stream/consumers";
import MovieVideos from "../../../components/movie-videos";
import MovieInfo from "../../../components/movie-info";
import {Suspense} from "react";
import Loading from "../../../(home)/loading";

export default async function MovieDetail({
    params: {id},
}: {
    params: { id: string };
}) {
    /*    const movie = await getMovie(id);
        const videos = await getVideos(id);*/
    //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
            <div>
                <h1>{id} : MOVIE DETAIL PAGE!!! </h1>
                <Suspense fallback={<h1>Loading Movie Info</h1>}>
                    <MovieInfo id={id}/>
                </Suspense>
                <Suspense fallback={<Loading/>}>
                    <MovieVideos id={id}/>
                </Suspense>
            </div>
    );
}
