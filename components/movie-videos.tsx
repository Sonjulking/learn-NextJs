import {json} from "node:stream/consumers";
import styles from "../styles/movie.videos.module.css";

async function getVideos(id: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(`Fetching videos : ${Date.now()}`);
    /*await new Promise((resolve) => setTimeout(resolve, 3000));*/
    //throw new Error("Something Broke");
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}


export default async function MovieVideos({id}: { id: string }) {
    const videos = await getVideos(id);
    /*return <h6>{JSON.stringify(videos)}</h6>;*/

    return <div className={styles.container}>
        {videos.map((video) => <iframe
                        key={video.id}
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                />
        )};
    </div>;
}