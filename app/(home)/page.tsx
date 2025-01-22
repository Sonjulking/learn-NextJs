/*export const dynamic = 'force-dynamic'; // 항상 동적으로 렌더링
revalidate: 특정 시간마다 데이터를 갱신하면서도 캐시를 유지하고 싶을 때
force-static: 완전히 정적인 페이지로 만들고 싶을 때
force-dynamic: 항상 서버에서 새로운 데이터를 가져와야 할 때
no-store: 캐시를 전혀 사용하지 않을 때
// 또는
export const revalidate = 10; // 10초마다 재검증*/

import Link from "next/link";

export const metadata = {
    title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

//export const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getMovies() {

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);

    /*const response = await fetch(URL, {
        next: {
            revalidate: 10 // 10초마다 재검증
        }
    });*/

    /*const response = await fetch(URL, {
        cache: 'no-store' // 캐시 사용하지 않음
    });*/

    const json = await response.json();

    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    /*return <div>{JSON.stringify(movies)}</div>;*/
    return (
            <div>
                {movies.map(movie =>
                        <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
            </div>
    );
}
